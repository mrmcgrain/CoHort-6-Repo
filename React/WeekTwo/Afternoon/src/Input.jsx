import React, { useState } from 'react'

const Input = ({ user, setUser }) => {



    const handleChange = (e) => {
        // console.log("handle change hit", e.target.value)
        setUser((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleClick = (e) => {
        e.preventDefault()
        console.log("STATE", user)
    }
    // style={{border: user.username || user.username !== ""? null :"red 1px solid "}} 
    return (
        <>
            {console.log("user", user)}
            <div id="Input">

                <input
                    style={{ border: user?.username !== "" ? null : "solid red 1px", color: "black" }}
                    name="username"
                    placeholder={user.username !== "" ? "username" : 'enter your username'}
                    onChange={(e) => handleChange(e)}
                ></input>

                {/* {user.username !== "" ? <br /> : <p>please enter your user name</p>} */}
                <br />

                <input
                    name="firstName"
                    placeholder='first name'
                    onChange={(e) => handleChange(e)}
                >

                </input>

                <br />

                <input name="lastName" placeholder='last name' onChange={(e) => handleChange(e)}></input>

                <br />
                <br />
                {/* <button type="submit" onClick={(e) => handleClick(e)}>click me</button> */}
            </div>

        </>
    )
}

export default Input