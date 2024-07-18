import { useState } from 'react'
import CompTwo from './CompTwo'

const Count = () => {
    const [count, setCount] = useState(0)

    return (
        <>
         {count > 3 ? <CompTwo /> : null}
         
            <h1>Hello World</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p style={{ color: count > 6 ? 'red' : null }}>hello all</p>
            </div>
        </>
    )
}

export default Count