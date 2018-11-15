const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const page = require('./views/page');
const loginForm = require('./views/loginForm');
const registrationForm = require('./views/registrationForm');

