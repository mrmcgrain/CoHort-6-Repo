import { useState } from 'react'
import './App.css'
// import ToyBox from './ToyBox'
import Input from "./Input"
import ConditionalRendering from './ConditionalRendering'

function App() {

  const [user, setUser] = useState({})


  return (
    <>

      {/* <Input /> */}
      <ConditionalRendering user={user} setUser={setUser}/>

    </>
  )
}

export default App
