require('dotenv').config();

// Required Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

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
app.post('/createreminder'),
    (req, res) => {
        console.log(req.body);
        const newLocation = {
            latitude: req.body.latitude,
            longitude: req.body.longitude
        };
        Location.createLocation(newLocation)
            .then(result => {
                res.send(result);
            })
            .then(result => {
                res.send(result);
                const newReminder = req.body.reminder;
                Reminder.add(newReminder).then(reminder => {
                    res.send(reminder);
                });
            });
    };
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
app.listen(3000, () => {
    console.log('express app is ready.');
});
