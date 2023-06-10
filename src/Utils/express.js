const express = require('express');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const app = express();
const port = 3010;

// API endpoint to send emails
app.post('/send-mail', (req, res) => {
    console.log(req.body)
    const { email, subject, message } = req.body;
    const msg = {
        to: email,
        from: 'youssifayman2004@gmail.com',
        subject,
        html: `<strong>${message}</strong>`,
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent');
            res.sendStatus(200);
        })
        .catch((error) => {
            console.error(error);
            res.sendStatus(500);
        });


});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
