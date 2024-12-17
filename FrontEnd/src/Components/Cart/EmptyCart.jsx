
import { Box, styled, Typography} from '@mui/material'
import React from 'react'
import Footer from '../Home/Footer/Footer'
const Components = styled(Box)`
height:60vh;
width:80%;
background:#fff;
margin:80px 140px;
`
const Container = styled(Box)`
text-align:center;
padding-top:12%;
`
function EmptyCart() {
    const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';
  return (
    <>
    <Components>
        <Container>
            <img src={imgurl} alt="Empty" style={{width:'15%'}} />
            <Typography>Your Cart is Empty! </Typography>
            <Typography>Add items to in now</Typography>
        </Container>
    </Components>
    <Footer/>
    
    </>
  )
}

export default EmptyCart