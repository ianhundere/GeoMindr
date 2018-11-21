# GeoMindr

## Synopsis
A backend web app created with Node, PostgreSQL, Express, Javascript, CSS, and HTML that allows users to text a Twilio number to record a reminder and their coordinates. This reminder gets saved in a database to be accessible at a later time either via our web interface or by messaging the same number to get a list of reminders.

## Features
- Full SMS support through Twilio
- Ability to add, update, and delete reminders via the web interface or Twilio
- User login system
- View public reminders via the web interface.

## Successes
- MVP came together quickly and all the initial ideas were executed well.

## Challenges
- Much of the focus went into the backend as opposed to the front-end which provides a barebones display of the database information
- Some of our stretch goals were not met

## Dependancies
- [bcrypt](https://www.npmjs.com/package/body-parser)
- [body-parser](https://www.npmjs.com/package/bcrypt) 
- [connect-pg-simple](https://www.npmjs.com/package/connect-pg-simple)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [pg-promise](https://www.npmjs.com/package/pg-promise)
- [twilio](https://www.npmjs.com/package/twilio)

## Future Features
- Proximity messaging where the user gets sent a text notifying them of the reminder when they’re close to that reminder’s GPS coordinates.

![GeoMindr Screenshots](/screenshot.png)
