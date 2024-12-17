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
function Contact() {
  const ContactUrl =
    "https://www.searchenginejournal.com/wp-content/uploads/2022/08/contact-us-2-62fa2cc2edbaf-sej.png";

  return (
    <>
      <Component>
        <Container>
          <h2 style={{ textAlign: "center" }}> Contact Us</h2>
          <Image src={ContactUrl} alt="" />
          <Text>
            We’re here to help! If you have any questions, concerns, or
            feedback, please don’t hesitate to reach out to us. Our customer
            service team is ready to assist you.
          </Text>
          <h2>Customer Support :</h2>
          <ul>
            <li>
              <Text>Email : [roshnibhoi506@gmail.com] </Text>
            </li>
            <li>
              <Text>Phone : [+91 6354948868] </Text>
            </li>
            <li>
              <Text>
                Live Chat : Available on our website from [hours of operation]{" "}
              </Text>
            </li>
          </ul>
          <h2>Business Hours :</h2>
          <ul>
            <li>
              <Text>Monday to Friday : 9 AM – 6 PM (EST) </Text>
            </li>
            <li>
              <Text>Saturday : 10 AM – 4 PM (EST) </Text>
            </li>
            <li>
              <Text>Sunday : Closed </Text>
            </li>
          </ul>
        </Container>
      </Component>
      <Footer />
    </>
  );
}

export default Contact;
