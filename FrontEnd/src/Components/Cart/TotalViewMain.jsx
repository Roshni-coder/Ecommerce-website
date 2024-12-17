import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { Header, Heading, Container, Price, Discount } from './TotalViewStyles';
import { calculateTotalAmount } from './CartUtil';

function TotalView({ cartItems }) {
  const [price, setPrice] = useState(0);
  const [discount, setDiscount] = useState(0);

  useEffect(() => {
    const { price, discount } = calculateTotalAmount(cartItems);
    const totalAmount = price - discount + 40;
    localStorage.setItem('totalAmount', totalAmount);
    setPrice(price);
    setDiscount(discount);
  }, [cartItems]);

  return (
    <Box>
      <Header>
        <Heading>PRICE DETAIL</Heading>
      </Header>
      <Container>
        <Typography>
          Price ({cartItems?.length} item)
          <Price component="span">₹{price}</Price>
        </Typography>
        <Typography>
          Discount ({cartItems?.length} item)
          <Price component="span">₹{discount}</Price>
        </Typography>
        <hr />
        <Typography style={{ fontSize: 16, fontWeight: 600 }}>
          Total Amount ({cartItems?.length} item)
          <Price component="span">₹{price - discount + 40}</Price>
        </Typography>
        <Discount>You will save ₹{discount - 40} on this Order</Discount>
      </Container>
    </Box>
  );
}

export default TotalView;
