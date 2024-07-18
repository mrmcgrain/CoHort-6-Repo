import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Inputs from "./Inputs"

import ConditionalRendering from './ConditionalRendering'

function App() {


  const [data, setData] = useState({})


  return (
    <>

      {console.log("data", data)}
      {/* <Inputs /> */}

      <ConditionalRendering data={data} setData={setData} />

    </>
  )
}

export default App
