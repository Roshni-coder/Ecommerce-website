import React, { useEffect, useState } from 'react'
import { Box,Typography,styled } from '@mui/material'

const Header = styled(Box)`
padding:15px 24px;
background:#fff;
border-bottom:1px solid #f0f0f0;

`
const Heading = styled(Typography)`
color:#878787;
`
const Container = styled(Box)`
padding:15px 24px;
background:#fff;
& > p{
margin-bottom:20px;
font-size:14px;
}

`
const Price=styled(Box)`
float:right;
`
const Discount = styled(Typography)`
color :green;
font-weight:500;
`

function TotalView({cartItems}) {
  const [price,setPrice]=useState(0);
  const [discount, setDiscount]=useState(0);

  useEffect(()=>{
    totalAmount();
  },[cartItems])

   const totalAmount=()=>{
    let price = 0,discount= 0;
    cartItems.map(item=>{
      price += item.price.mrp;
      discount +=(item.price.mrp - item.price.cost)
    })
    setPrice(price);
    setDiscount(discount);
  }


  return (
    <Box>
      <Header>
        <Heading>
          PRICE DETAIL
        </Heading>
      </Header>
      <Container>
        <Typography>Price ({cartItems?.length}item)
          <Price component= 'span'>₹{price}</Price>
        </Typography>
        <Typography>Discount ({cartItems?.length}item)
          <Price component= 'span'>₹{discount}</Price>
        </Typography>
        <hr />
        <Typography style={{fontSize:16,fontWeight:600}}>Total Amount({cartItems?.length}item)
          <Price component= 'span'>₹{price - discount + 40}</Price>
        </Typography>
        <Discount >You will save ₹{discount-40} on this Order </Discount>

      </Container>
    </Box>
  )
}

export default TotalView