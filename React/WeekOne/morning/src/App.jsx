
import './App.css'
import Content from './Content'
import Sidebar from './Sidebar'
import Footer from './Footer'
// import CompOne from './CompOne'
// import CompTwo from './CompTwo'
// import Count from './Count'
import Body from "./Body"
import Header from './Header'

function App() {

const user = {
  name: 'John',
  age: 25,
  email: 'john@gmail.com'
}

  return (
    <>

      <div className='container'>

        <Header/>
      
          <Body user={user}/>

        <Footer />
      
       
      </div>

    </>
  )
}

export default App
