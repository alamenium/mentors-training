import React from 'react';



const User = ({index, focusHandler, name,  email, grade, food, impression }) => {

    const clickHandler=()=>{
        focusHandler({
            index,
            name,
            email,
            grade,
            food,
            impression})
    }
    return (
        <div onClick={clickHandler} className={"User"}>
            <p>{name}</p>
        </div>
    );
};

export default User;
