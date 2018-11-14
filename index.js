require('dotenv').config();

// Required Modules
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./models/db');

// Model Variables
const User = require('./models/User');
const Reminder = require('./models/Reminder');
const Location = require('./models/Location');

// Route Variables
const createReminders = require('./createReminders');
const myReminders = require('./myReminders');
const allReminders = require('./allReminders');

// ========================================================
// Create Reminders
// ========================================================
app.post('/createReminders'), (req, res) => {};
// ========================================================

// ========================================================
// View My Reminders
// ========================================================
app.get('/myReminders'), (req, res) => {};
// ========================================================

// ========================================================
// View All Reminders
// ========================================================
app.get('/allReminders'), (req, res) => {};
// ========================================================

// ========================================================
app.listen(3000, () => {
    console.log('express app is ready.');
});
