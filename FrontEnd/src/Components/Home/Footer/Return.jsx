import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Footer from "./Footer";

const Component = styled(Box)`
  width: 100%;
  margin-top: 4%;
  background: white;
`;
const Image = styled("img")`
  margin-left: 22%;
  margin-top: 10px;
`;
const Container = styled(Box)`
  margin: 20px;
  padding: 10px;
`;
const Text = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
`;
const Heading = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;
function Return() {
  const ReturnUrl =
    "https://www.comalytics.com/wp-content/uploads/2019/07/returns-policy-featured-image.jpg";
  return (
    <>
      <Component>
        <Container>
          <h2 style={{ textAlign: "center" }}>Return Policy</h2>
          <Image src={ReturnUrl} alt="" />
          <Text style={{ marginTop: 20 }}>
            Thank you for shopping with us! We strive to provide high-quality
            electronics, but we understand that sometimes things don’t work out.
            Below are our return guidelines to ensure a smooth process.
          </Text>
          <Text style={{ marginTop: 10 }}>
            <span style={{ fontSize: "16px", fontWeight: 600 }}>
              Return Period :
            </span>
            <Text>
              You have 30 days from the date of delivery to return your
              electronic item(s) for a full refund or exchange.
            </Text>
          </Text>
          <Heading>Eligibility for Returns:</Heading>
          <ul>
            <li>
              {" "}
              <Text>
                Be unused and in the same condition that you received it.
              </Text>
            </li>
            <li>
              <Text>
                Be in the original packaging, including all accessories,
                manuals, and documentation.
              </Text>
            </li>
            <li>
              <Text>Include any included warranty cards (if applicable).</Text>
            </li>
          </ul>
          <Heading>Non-Returnable Items :</Heading>
          <ul>
            <li>
              <Text>Opened software and downloadable content.</Text>
            </li>
            <li>
              <Text>
                {" "}
                Personal audio devices (e.g., headphones, earbuds) if opened
              </Text>
            </li>
            <li>
              <Text>Items marked as final sale.</Text>
            </li>
          </ul>
        </Container>
      </Component>
      <Footer />
    </>
  );
}

export default Return;
