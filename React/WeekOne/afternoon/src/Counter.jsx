import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>Vite + React</h1>


            {/* {count > 3 ? <p>I am render</p> : null} */}

            {/*  condition ? if true do this : else do this */}
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default Counter