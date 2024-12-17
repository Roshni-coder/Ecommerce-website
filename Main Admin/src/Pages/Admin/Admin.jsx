import React from 'react';
import Slidbar from '../../Components/Slidebar/Slidbar.jsx'
import { Navigate, Route,Routes } from 'react-router-dom';
import './Admin.css'
import AddProduct from '../../Components/AddProduct/AddProduct.jsx';
import ListProducts from '../../Components/List Products/ListProducts.jsx';
import Userlist from '../../Components/userList/userList.jsx';
import Login from '../../Components/Login/Login.jsx'
// import Navbar from '../../Components/Navbar/Navbar.jsx';

import OrderList from '../../Components/OrderdUser/OrderList.jsx';
import Dontshow from '../../dontshow/Dontshow.jsx';
// import Dashboard from '../../Components/Login/Dashbord.jsx';

function Admin() {
  const auth=()=>{
    return localStorage.getItem('auth-token')
  }

  return (
    <div className='admin'>
      <Dontshow>
       <Slidbar/>
       </Dontshow>
       <Routes>
        <Route path='/adminLogin' element={<Login/>} ></Route>
        <Route path='/addProduct' element={auth()?<AddProduct/>:<Navigate to="/adminLogin" />}/>
        <Route path='*' element={<Navigate to="/adminLogin" />}/>
        <Route path='/listProduct' element={<ListProducts/>}/>
        <Route path='/userList' element = {<Userlist/>}/>
        <Route path='/orderdlist' element = {<OrderList/>}/>
       </Routes>
       </div>
   
  )
}

export default Admin
