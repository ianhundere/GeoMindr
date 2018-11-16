require('dotenv').config();

// Required Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const page = require('./views/page');
const helper = require('./views/helper');
const loginForm = require('./views/loginForm');
const registrationForm = require('./views/registrationForm');

app.use(bodyParser.urlencoded({ extended: false }));

const db = require('./models/db');

// Model Variables
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
// Create Reminders
// ========================================================
app.post('/createreminder', (req, res) => {
    console.log(req.body);

    Location.createLocation(req.body.latitude, req.body.longitude)
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
                    console.log(`look here ${reslt.userID}`);
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

app.get('/phone/:phone_number', (req, res) => {
    User.getByPhone(req.params.phone_number).then(name => {
        res.send(name);
    });
});
// ========================================================

// ========================================================
// View My Reminders (working)
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
    Reminder.getAll(req.params.id).then(remind => {
        res.send(remind);
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

// ========================================================

// ========================================================
// Testing Area
// ========================================================

app.put('/reminders/:id(\\d+)', (req, res) => {
    Reminder.getById(req.params.id).then(theReminder => {
        theReminder.updateReminder(req.body.reminder).then(reminderUpdated => {
            res.send(reminderUpdated);
        });
    });
});
// ========================================================
app.listen(3000, () => {
    console.log('express app is ready.');
});
