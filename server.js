// dependencies
var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');

// configure dotenv
require('dotenv').config();

// define port
var PORT = process.env.PORT || 8080;

// new express app instance
var app = express();

// configure middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// serve static assets in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client', 'build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
}

// routes
app.post('/contact', function (req, res) {
    // destructure req.body
    var email = req.body.email
    var name = req.body.name
    var message = req.body.message
    var phone = req.body.phone

    // create nodemailer transport
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.NODEMAILER_USER,
            pass: process.env.NODEMAILER_PASS
        }
    })

    // define mail options
    var mailOptions = {
        // from: email,
        to: 'nic@itinerantconsulting.com',
        subject: name + ' sent you a message from itinerantconsulting.com',
        text: name + ' | ' + email + ' | ' + message,
        html: '<p>' + name + '</p>' + '<p>' + message + '</p>' + '<p>' + email + '</p>' + '<p>' + phone + '</p>'
    }

    // send mail
    transporter.sendMail(mailOptions, function (err, res) {
        if (err) {
            res.status(500).json({ message: 'falied to send message', err })
        }
        res.status(200).json({ message: 'message sent' })
    })

    return res.end()
});

// start server
app.listen(PORT, function () {
    console.log('App running at http://localhost:' + PORT);
});
