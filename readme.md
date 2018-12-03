# GeoMindr

## Synopsis
A backend web app created with Node, PostgreSQL, Express, Javascript, CSS, and HTML that allows users to text a Twilio number using IFTTT to record a reminder and their coordinates. This reminder gets saved in a database to be accessible at a later time either via our web interface or by messaging the same number to get a list of reminders.

## Features
- Full SMS support through Twilio
- Create, retrieve, update, and delete reminders via SMS or web interface
- View public reminders via the web interface
- User login system

## Successes
- MVP came together quickly and all the initial ideas were executed well

## Challenges
- Dealing with so many promise chains often caused issues that required time and patience to solve
- With so many moving parts, it was often hard to keep track of everything and how they fit together properly
- Some of our stretch goals were not met

## Dependancies
- [twilio](https://www.twilio.com/)
- [IFTTT](https://ifttt.com/)
## Node Dependancies
- [twilio helper library](https://www.npmjs.com/package/twilio)
- [bcrypt](https://www.npmjs.com/package/body-parser)
- [body-parser](https://www.npmjs.com/package/bcrypt) 
- [connect-pg-simple](https://www.npmjs.com/package/connect-pg-simple)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express](https://www.npmjs.com/package/express)
- [express-session](https://www.npmjs.com/package/express-session)
- [pg-promise](https://www.npmjs.com/package/pg-promise)

## Future Features
- Proximity messaging where the user gets sent a text notifying them of the reminder when they’re close to that reminder’s GPS coordinates
![GeoMindr Video](/geomindr.gif)
![GeoMindr Screenshots](/screenshot1.png)
![GeoMindr Screenshots](/screenshot2.png)
![GeoMindr Screenshots](/screenshot3.png)
![GeoMindr Screenshots](/screenshot4.png)

## Team Members
- Ian Hundere - [GitHub](https://github.com/ianhundere)
- Stanley Chen - [GitHub](https://github.com/DannyShien)
- Greg Foreman - [GitHub](https://github.com/GFore)
