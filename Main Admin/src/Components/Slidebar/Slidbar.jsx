import React from 'react';
import './Slidbar.css'
import {Link} from "react-router-dom"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Typography } from '@mui/material';

function Slidbar() {
  return (
    <div  className='sidebar' style={{backgroundColor:'white'}}>
      <Link to="/" style={ {textDecoration:'none'}}>
      <div className='slidebar-item'>
        <ShoppingCartIcon/>
        <Typography>Add Product</Typography>
      </div>
      </Link>
      <Link to="/listProduct" style={ {textDecoration:'none'}}>
      <div className='slidebar-item'>
        <Inventory2Icon/>
        <Typography>Product List</Typography>
      </div>
      </Link>
      <Link to="/userList" style={ {textDecoration:'none'}}>
      <div className='slidebar-item'>
        <Inventory2Icon/>
        <Typography>User List</Typography>
      </div>
      </Link>
      <Link to="/orderdlist" style={ {textDecoration:'none'}}>
      <div className='slidebar-item'>
        <Inventory2Icon/>
        <Typography>Orderd List</Typography>
      </div>
      </Link>
    </div>
  )
}

export default Slidbar
