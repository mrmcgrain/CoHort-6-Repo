import React, { useState } from 'react'
import Inputs from './Inputs'

const ConditionalRendering = ({ setData, data }) => {

    const [render, setRender] = useState(false)

    const handleClick = () => {
        setRender(!render)
    }

    return (
        <>
            <div>ConditionalRendering</div>


            {console.warn("data", data.user)}
            {/* terenary syntax  pokemon ? true - DO THIS : false - DO THAT */}
            {render
                ?  // if its truthy
                (  // if we need multiple lines use ()
                    <div>
                        <p>Thank you for your submission</p>
                        <p>{data.user}</p>
                        <p>{data.first}</p>
                        <p>{data.last}</p>
                    </div>
                )
                :  //else render the code below
                (
                    <div>
                        <Inputs data={data} setData={setData} />
                    </div>
                )
            }

            <button
            disabled={data.user && data.user !== "" && data.first && data.first !== "" && data.last && data.last !== "" ? false : true}
                onClick={() => handleClick()}
            >
                submit
            </button>


        </>

    )
}

export default ConditionalRendering