const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const MessagingResponse = require('twilio').twiml.MessagingResponse;

const app = express();
app.use(bodyParser.urlencoded({extended : false}));

//let todos = [];

app.post('/sms', (req, res) => {

    const twiml = new MessagingResponse();
    console.log(req.body.Body);
  
    // check if this is initial message or reply message
    if (req.body.Body.startsWith('{"task":"')) {
        // initial message from IFTTT
        // Body will be a JSON obj in a string
        let bod = JSON.parse(req.body.Body);      // bod is an object of key/val pairs
        console.log(bod);
        twiml.message({to: `${bod.phone}`}, `${bod.task} GeoMindr for phone # ${bod.phone} at lat/lon ${bod.lat}/${bod.lon}.\nWhat is your GeoMindr?`);

        // TODO: NEED TO INSERT RECORD IN remind_init FOR THIS NEW REQEST

    } else {
        // reply message received with Geomindr body
        twiml.message(`New GeoMindr recorded: ${req.body.Body}`);

        // TODO: SEARCH FOR PHONE NUMBER IN remind_init
        // If it exists, then append the geomindr text to that info and insert in reminders table
        // Then remove the record from remind_init. If it doesn't exist in remind_init, then
        // reply telling user to click the IFTTT button to trigger new request.
    }

  console.log("================");
  console.log(twiml.toString());
  res.writeHead(200, {'Content-Type': 'text/xml'});
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log('Express server listening on port 1337');
});