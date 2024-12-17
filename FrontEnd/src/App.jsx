
//Components
import { Box } from '@mui/material';
import Header from './Components/Header/Header.jsx';
import Home from './Components/Home/Home.jsx';

import DataProvider from './Context/DataProvider.jsx';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DetailViwe from './Components/Details/DetailView.jsx';
import Cart from './Components/Cart/Cart.jsx'
import Return from './Components/Home/Footer/Return.jsx';
import About from './Components/Home/Footer/About.jsx';
import Exchange from './Components/Home/Footer/Exchange.jsx';
import Contact from './Components/Home/Footer/Contact.jsx';

import Payment from './Components/Payment Deatil/Payment.jsx';
import Feedback from './Components/Home/Footer/Feedback.jsx';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Box style={{marginTop:55}}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<DetailViwe/>} />
          <Route path='/cart' element={<Cart />}/>
          <Route path='/Return' element={<Return/>} />
          <Route path='/About' element={<About/>} />
          <Route path='/Exchange' element={<Exchange/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path='/Feedback' element={<Feedback/>} />
          <Route path='/Payment' element={<Payment/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
      )
}

export default App
