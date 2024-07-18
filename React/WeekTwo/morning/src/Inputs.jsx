import React, { useState } from 'react'  //import useState from React

const Inputs = ({ setData, data }) => {

    // const [data, setData] = useState({}) // Stateful object

    const handleClick = () => {
        console.log("YOU CLICKED ME")
        console.log("DATA", data)   // console logging State  (data)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        setData((prev) => ({   // prev is the previous snapshot of state
            ...prev,            // spread operator to copy the stateful object
            [e.target.name]: e.target.value   // assign dynamic key : vaule pairs to state
        }))
    }

    return (
        <>
            <div>Inputs</div>

            <input style={{ border: data.user !== "" ? null : "red 1px solid " }} name="user" placeholder='username' onChange={(e) => handleChange(e)}></input>

            {data.user !== "" ? (<br />) : (<p>enter a username</p>)}

            <br />

            <input
                style={{ border: data.first !== "" ? null : "red 1px solid " }}
                name="first"
                placeholder='first name'
                onChange={(e) => handleChange(e)}
            ></input>

            <br />
            <br />
            <input style={{ border: data.last !== "" ? null : "red 1px solid " }} name="last" placeholder="last name" onChange={(e) => handleChange(e)}></input>
            <br />
            <br />
            {/* <button onClick={handleClick}>Click Me</button> */}
        </>
    )
}

export default Inputs