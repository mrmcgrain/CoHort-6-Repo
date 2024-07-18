import React, { useState } from 'react'
import Input from './Input'

const ConditionalRendering = ({ user, setUser }) => {

    const [render, setRender] = useState(true)


    const handleClick = () => {
        setRender(!render)
    }

    return (
        <>
            <div >ConditionalRendering
                {/* pokemon ? if true - DO STUFF : else - Do Other Stuff */}
                {/* condition ? () : () */}

                {render
                    ?
                    (
                        <Input user={user} setUser={setUser} />
                    )
                    :
                    (
                        <div>
                            <p>Thank you for your submission</p>
                            <p>{user.username}</p>
                            <p>{user.firstName}</p>
                            <p>{user.lastName}</p>
                        </div>
                    )
                }

                <button
                    disabled={user.username && user.username !== ""  && user.firstName && user.firstName !== "" && user.lastName && user.lastName !== "" ? false : true}
                    onClick={() => handleClick()}
                >
                    submit
                </button>

            </div>
        </>
    )
}

export default ConditionalRendering