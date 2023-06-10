const postData = async () =>{
    const url = 'http://localhost:3011/api/test-email/';
    const requestBody = {
        email: 'cruncogames@gmail.com',
        subject: 'hello',
        text: 'hi'
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

postData();






