import React from 'react';
import User from './User';


const UserList = ({userList, keyword, focusHandler})=>{

    return (
        <div className={"userList"}>
            {userList.map((user, index)=>{
                var name = user.name.toLowerCase();
                var key = keyword.toLowerCase();

                return (name.includes(key) && (<User
                    key={index}
                    name={user.name}
                    email={user.email}
                    grade={user.finalProjectGrade}
                    impression={user.impression}
                    food={user.favouriteFood}
                    focusHandler={focusHandler}
                    index={user.id}
                />)
                )}
            )}
        </div>
    )
}

export default UserList;
