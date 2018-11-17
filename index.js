require('dotenv').config();

// Required Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;
app.use(bodyParser.urlencoded({ extended: false }));

// Views and CSS
app.use(express.static('public'));
const page = require('./views/page');
//const helper = require('./views/helper');
const loginForm = require('./views/loginForm');
const registerForm = require('./views/registerForm');
const homePage = require('./views/home');

// Model Variables
const db = require('./models/db');
const User = require('./models/User');
const Location = require('./models/Location');
const Init_Reminder = require('./models/Init_Reminder');
const Reminder = require('./models/Reminder');

// Route Variables
// const createReminders = require('./createReminders');
// const myReminders = require('./myReminders');
// const allReminders = require('./allReminders');

app.get('/', (req, res) => {
    const thePage = page();
    res.send(thePage);
});

// ========================================================
// Register
// ========================================================
app.get('/register', (req, res) => {
    const theForm = registerForm();
    const thePage = page(theForm);
    res.send(thePage);
});

app.post('/register', (req, res) => {
    console.log(req.body);
    const newName = req.body.name;
    const newUsername = req.body.username;
    /*const newPassword = req.body.password;*/
    const newPhone = req.body.phone_number;
    User.createUser(newName, newUsername, /*newPassword,*/ newPhone)
        .catch(err => {
            console.log(err);
            res.redirect('/register');
        })
        .then(newUser => {
            res.send(newUser => {
                res.redirect('/home');
            });
        });
});

app.get('/home', (req, res) => {
    res.send(page(homePage));
});

// ========================================================
// Create Reminders (working)
// ========================================================
app.post('/createreminder', (req, res) => {
    console.log(req.body);
    const newLatitude = req.body.latitude;
    const newLongitude = req.body.longitude;
    Location.createLocation(newLatitude, newLongitude)
        .then(result => {
            return { locationID: result };
        })
        .then(result => {
            User.getByPhone(req.body.phone_number)
                .then(r => {
                    result.userID = Number(r);
                    return result;
                })
                .then(reslt => {
                    console.log(reslt);
                    const newReminder = req.body.reminder;
                    // console.log(`look here ${reslt.userID}`);
                    Reminder.createReminder(
                        newReminder,
                        true,
                        reslt.locationID,
                        reslt.userID
                    ).then(reminder => {
                        // console.log(reminder);
                        // res.send(reminder);
                        res.redirect(`/`);
                    });
                });
        });
});
// ========================================================

// ========================================================
// View Reminder by ID (working)
// ========================================================
app.get('/myreminders/:id([0-9]+)', (req, res) => {
    Reminder.getById(req.params.id).then(remind => {
        res.send(remind);
    });
});
// ========================================================

// ========================================================
// View All Reminders (working)
// ========================================================
app.get('/myreminders/', (req, res) => {
    Reminder.getAll(req.params.id).then(allReminders => {
        res.send(allReminders);
    });
});
// ========================================================

// ========================================================
// Delete Reminder by ID (working)
// ========================================================

app.delete('/reminders/:id(\\d+)', (req, res) => {
    Reminder.getById(req.params.id).then(theReminder => {
        theReminder.deleteById(req.params.id).then(delReminderByID => {
            res.send(delReminderByID);
        });
    });
});

// ========================================================

// ========================================================
// Update Reminder by ID (working)
// ========================================================

app.put('/reminders/:id(\\d+)', (req, res) => {
    Reminder.getById(req.params.id).then(theReminder => {
        theReminder.updateReminder(req.body.reminder).then(reminderUpdated => {
            res.send(reminderUpdated);
        });
    });
});

app.post('/sms', (req, res) => {
    const twiml = new MessagingResponse();

    console.log('===body.BODY=== :', req.body.Body);

    // check if this is the initial message or a reply message
    if (req.body.Body.startsWith('{"task":"')) {
        // initial message from IFTTT
        // Body will be a JSON obj in a string, so need to parse it
        let bod = JSON.parse(req.body.Body); // bod is an object of key/val pairs
        console.log(bod);
        twiml.message(
            { to: `${bod.phone}` },
            `${bod.task} GeoMindr for phone # ${bod.phone} at lat/lon ${
                bod.lat
            }/${bod.lon}.\nWhat is your GeoMindr?`
        );
        // TODO: CHECK IF THE PHONE NUMBER ALREADY EXISTS IN init_reminders. IF IT DOES
        // THEN DELETE IT BEFORE PROCEEDING (MAY NEED TO RESET ITS TIMEOUT ALSO) SINCE NO
        // PHONE SHOULD HAVE MULTIPLE INITIATED REMINDERS

        // insert the new request in init_reminders while awaiting the reminder text
        Init_Reminder.createInit(
            bod.phone,
            bod.lat,
            bod.lon,
            bod.time_stamp
        ).then(init_rem => {
            //console.log('INSERTED: ', init_rem);
            console.log('=======TWIML=========');
            console.log(twiml.toString());
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());

            // TODO: CALL deleteAfterNoResponse() TO SET AN EXPIRATION TIMER
        });
    } else {
        // This is a reply message.
        // Search for the phone number in init_reminders.
        // If it exists, then append the geomindr text to that info and insert in reminders table.
        // If it doesn't exist, then reply telling user to click the IFTTT button to trigger new request.
        const phone = req.body.From.replace('+1', ''); //need to correct this to handle intl phones
        Init_Reminder.getByPhone(phone).then(result => {
            // check if phone number was not found
            if (result.id === 'not initiated') {
                // IFTTT button wasn't pressed or it timed out
                twiml.message(
                    `Request expired or does not exist - Please tap the IFTTT Button to restart`
                );
                res.writeHead(200, { 'Content-Type': 'text/xml' });
                res.end(twiml.toString());
            } else {
                //phone exists in init_reminders, so insert the new Geomindr into the reminders table
                Location.createLocation(result.lat, result.lon)
                    .then(a => {
                        return { locationID: a };
                    })
                    .then(b => {
                        User.getByPhone(phone)
                            .then(c => {
                                b.userID = Number(c);
                                return b;
                            })
                            .then(d => {
                                //console.log(d);
                                const newReminder = req.body.Body;
                                Reminder.createReminder(
                                    newReminder,
                                    true,
                                    d.locationID,
                                    d.userID
                                ).then(geomindr => {
                                    console.log(
                                        '+++GEOMINDR+++: ',
                                        geomindr.reminder
                                    );
                                    // reply message received with Geomindr body
                                    twiml.message(
                                        `New GeoMindr recorded: ${
                                            geomindr.reminder
                                        }`
                                    );
                                    res.writeHead(200, {
                                        'Content-Type': 'text/xml'
                                    });
                                    res.end(twiml.toString());
                                });
                            });
                    });
            }
        });
    }
});

// ========================================================

// ========================================================
// Delete Init_Reminder after 5min (working)
// ========================================================

app.delete('/init_reminders/:id(\\d+)', (req, res) => {
    Init_Reminder.deleteAfterNoResponse(req.params.id, () => {
        res.send('there was no response.');
    });
});

// ========================================================

// ========================================================
// View Location by ID (working)
// ========================================================
app.get('/locations/:id([0-9]+)', (req, res) => {
    Location.getById(req.params.id).then(location => {
        res.send(location);
    });
});
// ========================================================

// ========================================================
// Delete Location by ID (working)
// ========================================================
app.delete('/locations/:id(\\d+)', (req, res) => {
    Location.getById(req.params.id).then(theLocation => {
        theLocation.deleteById(req.params.id).then(delLocationByID => {
            res.send(delLocationByID);
        });
    });
});
// ========================================================

// ========================================================
// Create User (working)
// ========================================================

app.post('/register', (req, res) => {
    console.log(req.body);
    const newName = req.body.name;
    const newUsername = req.body.username;
    /*const newPassword = req.body.password;*/
    const newPhone = req.body.phone_number;
    User.createUser(newName, newUsername, /*newPassword,*/ newPhone)
        .catch(err => {
            console.log(err);
            res.redirect('/register');
        })
        .then(newUser => {
            res.send(newUser);
        });
});

// ========================================================

// ========================================================
// Get All Users (working)
// ========================================================

app.get('/users', (req, res) => {
    User.getAll().then(allUsers => {
        res.send(allUsers);
    });
});

// ========================================================

// ========================================================
// Get User by Phone (working)
// ========================================================

app.get('/phone/:phone_number', (req, res) => {
    User.getByPhone(req.params.phone_number).then(name => {
        res.send(name);
    });
});

// ========================================================

// ========================================================
// Get User by ID (working)
// ========================================================

app.get('/users/:id(\\d+)', (req, res) => {
    User.getById(req.params.id).then(user => {
        res.send(user);
    });
});

// ========================================================

// ========================================================
// Get User by Username (working)
// ========================================================

app.get('/users/:username', (req, res) => {
    User.getByUserName(req.params.username).then(username => {
        res.send(username);
    });
});

// ========================================================

// ========================================================
// Get User's Reminders (working)
// ========================================================
app.get('/users/reminders/:id(\\d+)', (req, res) => {
    User.getById(req.params.id).then(userReminders => {
        userReminders.getReminders(req.params.reminder).then(reminders => {
            res.send(reminders);
        });
    });
});
// ========================================================

// ========================================================
// Update User's Name (working)
// ========================================================

app.put('/users/:id(\\d+)', (req, res) => {
    User.getById(req.params.id).then(theUser => {
        theUser.updateName(req.body.name).then(nameUpdated => {
            res.send(nameUpdated);
        });
    });
});

// ========================================================

// ========================================================
// Delete User (working)
// ========================================================

app.delete('/users/:id(\\d+)', (req, res) => {
    User.getById(req.params.id).then(theUser => {
        theUser.delete().then(delUser => {
            res.send(delUser);
        });
    });
});

// ========================================================

app.listen(3000, () => {
    console.log('express app is ready.');
});
