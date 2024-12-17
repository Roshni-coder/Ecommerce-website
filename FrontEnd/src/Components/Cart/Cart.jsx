import {Grid, Box, Typography, styled,Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'

// Components
import CartItem from './CartItem'
import TotalViewMain from './TotalViewMain'
import EmptyCart from './EmptyCart'

const Container = styled(Grid)(({theme})=>({
    padding:'30px 135px',
    [theme.breakpoints.down('md')]:{
        padding:'15px 0'
    }
}))

const Header = styled(Box)`
padding:15px 24px;
background:#fff;
`
const ButtonWraper = styled(Box)`
padding:16px 22px;
background:#fff;
box-shadow:0 -2px 10px 0 rgb(0 0 0 /10%);
border-top:1px solid #f0f0f0;

`

const StyledButton = styled(Button)`
display:flex;
margin-left:auto;
background:#fb6426;
color:#fff;
width:250px;
height:51px;
border-radius:2px;
`
const LeftComponent = styled(Grid)(({theme})=>({
    paddingRight:15,
    [theme.breakpoints.down('md')]:{
        margingBottom:15
    }

}))




export default function Cart() {
const {cartItems}= useSelector(state =>  state.cart)
  return (
       <>
       {
        cartItems.length ? 
        <Container container>
            <LeftComponent item lg ={9} md={9} sm={12} xs={12}>
                <Header>
                    <Typography>My Cart({cartItems.length})</Typography>
                </Header>
                {
                    cartItems.map(item=>(
                       <CartItem item={item}/>
                    ))
                }
                <Link to='/Payment' style={{textDecoration:'none'}}>
                <ButtonWraper>
                  <StyledButton>Place Order</StyledButton>
                </ButtonWraper>
                </Link>
            </LeftComponent>
            <Grid item lg = {3} md={3} sm={12} xs={12}>
                <TotalViewMain cartItems={cartItems}/>
            </Grid>
           
        </Container>
        :
        <EmptyCart/>
       }
       </> 
  )
}
