import React from "react";
import { Box, styled, Typography } from "@mui/material";
import Footer from "./Footer";

const Component = styled(Box)`
  width: 100%;
  background: white;
`;
const Heading = styled(Typography)`
  font-size: 20px;
  font-weight: 600;
  margin-top: 20px;
`;
const Abouts = styled(Box)`
  margin: 10px;
  padding: 20px;
`;
const Image = styled("img")`
  width: 50%;
  height: 25%;
  margin-left: 25%;
  margin-top: 10px;
  margin-bottom: 20px;
`;
const Span = styled("span")`
  font-weight: 600;
  font-size: 18px;
`;
const Text = styled(Typography)`
  font-size: 16px;
  margin-top: 10px;
`;

function About() {
  const AboutUrl =
    "https://media.licdn.com/dms/image/v2/D4E12AQF15pWXXaISjg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1690527479981?e=2147483647&v=beta&t=m8Q1eAjZE1su8ndDJKuKcmnJedxw4zpu7kDGVxYZY0E";
  return (
    <>
      <Component>
        <Abouts>
          <h2 style={{ textAlign: "center" }}>About Us</h2>
          <Image src={AboutUrl} alt="" />
          <Text Text>
            At <Span> [Digital Shop] </Span>, we are passionate about technology
            and dedicated to providing our customers with the latest and
            greatest in electronic products. Founded in [2024], we set out to
            create a platform where tech enthusiasts and everyday users alike
            can find high-quality electronics at competitive prices.
          </Text>
          <Heading>Our Mission</Heading>
          <Text Text>
            <Span> Our mission is simple: </Span>to make technology accessible
            to everyone. We believe that the right gadgets can enhance your
            life, whether you’re looking for cutting-edge devices, reliable
            accessories, or innovative solutions for your home and office.
          </Text>

          <Heading>What We Offer</Heading>
          <Text>We offer a wide range of products, including :</Text>
          <ul>
            <li>
              <Span> Smartphones & Tablets:</Span>
              <Text>Stay connected with the latest mobile technology.</Text>
            </li>
            <li>
              <Span>Computers & Laptops :</Span>
              <Text>
                From powerful workstations to portable devices, we have
                something for everyone.
              </Text>
            </li>
            <li>
              <Span> Home Electronics :</Span>
              <br />
              <Text>
                Upgrade your living space with smart home devices, TVs, and
                audio systems.
              </Text>
            </li>
            <li>
              <Span>Accessories :</Span>
              <br />
              <Text>
                {" "}
                Enhance your devices with our selection of chargers, cases, and
                peripherals.
              </Text>
            </li>
          </ul>
          <Heading>Quality & Trust</Heading>
          <Text>
            Quality is at the heart of what we do. We carefully curate our
            product selection from reputable manufacturers, ensuring that you
            receive only the best. Our knowledgeable team is always on hand to
            provide expert advice and support, helping you make informed
            decisions.
          </Text>
          <Heading>Customer-Centric Approach</Heading>
          <Text>
            <Span>[Digital Shop]</Span>, our customers come first. We strive to
            deliver an exceptional shopping experience, from user-friendly
            navigation on our website to fast and reliable shipping. Your
            satisfaction is our priority, and we’re here to assist you every
            step of the way.
          </Text>
        </Abouts>
      </Component>
      <Footer />
    </>
  );
}

export default About;
