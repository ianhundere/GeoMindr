require('dotenv').config();

// Required Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
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

const page = require('./views/page');

app.get('/', (req, res) => {
    const thePage = page();
    res.send(thePage);
});

// ========================================================
// Create Reminders
// ========================================================
app.post('/createreminder', (req, res) => {
    console.log(req.body);
    let reminderObj = {};
    Location.createLocation(req.body.latitude, req.body.longitude).then(
        result => {
            reminderObj.locationID = result;
            User.getByPhone(req.body.phone_number).then(r => {
                reminderObj.userID = Number(r);
                console.log('hoo boo', r);
            });
            const newReminder = req.body.reminder;
            console.log(`look here ${reminderObj.userID}`); // ---
            Reminder.createReminder(
                newReminder,
                true,
                reminderObj.locationID,
                reminderObj.userID
            ).then(reminder => {
                res.send(reminder);
            });
        }
    );
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
// Testing Area
// ========================================================
app.delete('/reminders/:id(\\d+)', (req, res) => {
    // console.log(req.params.id);
    Reminder.deleteById(req.params.id).then(delReminderByID => {
        res.send(delReminderByID);
    });
});

// app.post('/reminders/:id(\\d+');

// ========================================================
app.listen(3000, () => {
    console.log('express app is ready.');
});
