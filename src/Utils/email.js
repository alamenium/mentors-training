 async function sendEmail(email, subject, text) {
    const url = 'http://localhost:3010/api/test-email/';
    const requestBody = {
        email,
        subject,
        text
    };

    const headers = {
        'Content-Type': 'application/json'
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error('Request failed with status ' + response.status);
        }

        const data = await response.json();
        console.log('Response:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

 exports.sendEmail  =sendEmail;
