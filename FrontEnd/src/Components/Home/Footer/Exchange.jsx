import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Footer from "./Footer";

const Component = styled(Box)`
  width: 100%;
  margin-top: 4%;
  background: white;
`;
const Image = styled("img")`
  width: 50%;
  height: 30%;
  margin-left: 25%;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Text = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
`;
const Container = styled(Box)`
  margin: 20px;
  padding: 10px;
`;
function Exchange() {
  const ExchangeUrl =
    "https://6920750.fs1.hubspotusercontent-na1.net/hub/6920750/hubfs/featured%20images/Updated%20blog%20banner%20images%20Mar%2022/ecommerce-exchange-policy.png?width=695&name=ecommerce-exchange-policy.png";
  return (
    <>
    <Component>
      <Container>
      <h2 style={{textAlign:'center'}}>Exchange Policy</h2>
      <Image src={ExchangeUrl} alt="" />
      <Text>
        Thank you for shopping with us! We want you to be completely satisfied
        with your purchase. If you need to exchange an item, we’ve made the
        process simple and straightforward.
      </Text>
      <Text style={{ marginTop: 10 }}>
       <span style={{ fontSize: "16px", fontWeight: 600 }}> Exchange Period  :</span> You have 30 days from the date of delivery to request
        an exchange for your electronic item(s).
      </Text>
      <h2>Eligibility for Exchanges: </h2>
      <Text>To be eligible for an exchange, your item must:</Text>
      <ul>
        <li><Text>Be unused and in the same condition that you received it. </Text></li>
        <li>
          <Text>Be in the original packaging, including all accessories, manuals, and
          documentation. </Text>
        </li>

        <li> <Text>Not be a non-returnable item (see below). </Text></li>
      </ul>
      <h2>Non-Exchangeable Items: </h2>
      <Text>The following items cannot be exchanged:</Text>
      <ul>
        <li><Text>Opened software and downloadable content </Text></li>
        <li><Text>Personal audio devices (e.g., headphones, earbuds) if opened </Text></li>
        <li><Text>Items marked as final sale </Text></li>
      </ul>
      </Container>
    </Component>
    <Footer/>
    </>
  );
}

export default Exchange;
