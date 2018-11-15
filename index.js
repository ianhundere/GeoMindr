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
// app.post('/createReminders'),
//     (req, res) => {
//         console.log(req);
//         // console.log(req.body);
//         // res.send("ok");
//         const newReminder = req.body.reminder;
//         User.add(newReminder).then(reminder => {
//             res.send(reminder);
//         });
//     };
// ========================================================

// ========================================================
// View My Reminders
// ========================================================
app.get('/myReminders', (req, res) => {});
// ========================================================

// ========================================================
// View All Reminders
// ========================================================
app.get('/allReminders', (req, res) => {
    User.getAll().then(allUsers => {
        // res.send(allUsers);
        const usersUL = userList(allUsers);
        const thePage = page(usersUL);
        console.log(thePage);
        res.send(thePage);

        // res.send(page(userList(allUsers)));
    });
});
// ========================================================

// ========================================================
app.listen(3000, () => {
    console.log('express app is ready.');
});
