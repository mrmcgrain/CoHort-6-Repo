import React from 'react'

const Content = (props) => {
    return (
        <div className='content'>

            <p>{props.user.age}</p>
            <p>{props.user.email}</p>

        </div>
    )
}

export default Content
