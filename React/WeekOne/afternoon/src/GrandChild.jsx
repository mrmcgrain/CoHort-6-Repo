import React from 'react'

const GrandChild = ({ user }) => {
    return (
        <>
            {console.log("GrandChild", user)}
            <div style={{ border: 'solid red 2px' }}>

                <div>GrandChild</div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <p>this is coming from props, from App.jsx</p>


                <p>{user.username}</p>
            </div>

        </>
    )
}

export default GrandChild