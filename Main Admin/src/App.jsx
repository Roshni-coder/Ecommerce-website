import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Admin from './Pages/Admin/Admin.jsx'
// import Login from './Components/Login/Login.jsx'
import Dontshow from './dontshow/Dontshow.jsx'

function App() {
  return (
    <div>
       {/* <Login></Login>  */}
      <Dontshow>
       <Navbar />
       </Dontshow>

       <Admin />
.    
    </div>
  )
}

export default App
