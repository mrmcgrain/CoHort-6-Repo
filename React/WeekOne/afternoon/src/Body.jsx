import React from 'react'
import Left from './Left'
import Right from "./Right"
import Center from './Center'

const Body = (props) => {

    return (
        <div id="body">
            {console.log("from body", props)}
            {/* <p>{props.user.username}</p> */}
            <Left />
            <Center user={props.user}/>
            <Right />

        </div>
    )
}

export default Body