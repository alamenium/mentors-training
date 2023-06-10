import axios from 'axios';

const url = 'http://localhost:3010/send-mail';

const data = {
    email: 'cruncogames@gmail.com',
    message: 'This is the email message.',
    subject: 'Email Subject'
};

axios.post(url, data)
    .then(response => {
        console.log('POST request was successful.');
    })
    .catch(error => {
        console.error('POST request failed:', error);
    });
