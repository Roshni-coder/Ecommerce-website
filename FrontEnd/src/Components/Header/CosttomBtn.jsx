import { Badge, Box, Button, styled, Typography } from '@mui/material'
import { ShoppingCart } from "@mui/icons-material";
import {Link} from 'react-router-dom'

//Componetns
import Loginialog from '../LogIn/Loginialog';

import { useState,useContext } from 'react'
import { useSelector } from 'react-redux';

import { DataContext } from '../../Context/DataProvider';
import Profile from './Profile';

const Wrraper = styled(Box)(({theme})=>({
  display:'flex',
  margin:'0 3% 0 auto',
  '& > * ':{
  marginRight:'70px !important',
  alignItem :'center',
  fontSize:'16px',
  },
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));

const Container = styled(Link)(({theme})=>({
  display:'flex',
  marginTop:'5px',
  textDecoration:'none',
  color:'#fff',
  [theme.breakpoints.down('md')]:{
    display:'block'
  }
}));

const LogInBtn = styled(Button)`
  color: #2874f0;
  background:white;
  text-transform:none;
   padding:5px 60px;
  border-radius :2px;
  box-shadow:none;
  font-weight:600;
  height:32px;
`;

 const CosttomBtn=()=> {
  const [open, setopen] = useState(false);

  const { account ,setAccount} = useContext(DataContext);

  const {cartItems}= useSelector(state =>state.cart);
  const openDialog = () => {
    setopen(true);
  }
    return (
      <Wrraper>
        
        {account ? (
         <Profile account={account} setAccount={setAccount}/>
        ) : (
          <LogInBtn variant="contained" onClick={() => openDialog()}>
            LogIn
          </LogInBtn>
        )}
     
{/* 
        <Typography style={{ marginTop: 6,width: 130 }}>
          Become a Seller
        </Typography>
        <Typography style={{ marginTop: 6 ,}}>More</Typography> */}
        <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color='secondary'>
          <ShoppingCart />
          </Badge>
          <Typography style={{marginLeft:10}}>Cart</Typography>
        </Container>
        
        <Loginialog open={open} setopen={setopen} />
        
      </Wrraper>
    );
}

export default CosttomBtn