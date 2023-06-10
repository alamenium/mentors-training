import React from 'react';

const Loading = () => {
    return (<div className={"userList"}>
        { Array(10).fill(
            <div className={"User loading"}>
                <br/>
            </div>
        )}
    </div>);
};

export default Loading;