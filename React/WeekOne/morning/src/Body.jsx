import React from 'react'
import Content from './Content'
import Sidebar from './Sidebar'


const Body = (props) => {
    return (
        <>
        <div className='body'>

            <Sidebar />

            <Content user={props.user} />

            <Sidebar />
        </div>
        </>
    )
}

export default Body