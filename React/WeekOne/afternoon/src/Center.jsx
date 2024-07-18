import React from 'react'

const Center = ( props) => {
    return (
        <div id="center">
            {/* {console.log("fromcenter", props)} */}
            {/* {console.log("fromcenter props", user)} */}
            <p>Welcome Back : {props.user.username}</p>
        </div>
    )
}

export default Center