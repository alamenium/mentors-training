import SheetDB from "sheetdb-js";

function GetUsers(){
    SheetDB.read('https://sheetdb.io/api/v1/c24yendb9k4wk', {}).then(function (result) {
        return result;
    }, function (error) {
        return error;
    });
}

export default GetUsers;







