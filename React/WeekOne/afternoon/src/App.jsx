import React, { useState } from 'react'



import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompOne from './CompOne'
import Counter from './Counter'

import Header from './Header'
import Body from "./Body"
import Footer from "./Footer"


import Child from "./Child"

import ToyBox from './ToyBox'

function App() {


  // const [toy, setToy] = useState('car')


  let user = {
    username: "Micahel",
    role: "Instructor"
  }

  return (
    <>
      {/* {setToy("Plane")} */}
      {/* {console.log("toy is a", toy)} */}
      <div id="container" style={{ border: 'solid yellow 2px' }}>

        {/* <Child user={user} /> */}
        <ToyBox />

        <Counter />

      </div>

    </>
  )
}

export default App
