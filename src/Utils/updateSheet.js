const sheetDBUrl = 'https://sheetdb.io/api/v1/c24yendb9k4wk';
 // Replace with the ID of the row you want to update



function updateSheetData(rowId, data) {
    fetch(`${sheetDBUrl}/id/${rowId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (response.ok) {
                console.log('Data updated successfully!');
            } else {
                throw new Error('Failed to update data');
            }
        })
        .catch(error => {
            console.error(error);
        });
}

export default updateSheetData;