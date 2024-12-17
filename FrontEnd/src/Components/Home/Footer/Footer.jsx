import React from "react";
import { Link } from "react-router-dom";
import { Box, styled ,Typography} from "@mui/material";
import insta from "../../Assests/insta.svg"
import facebook from "../../Assests/facebook.svg"
import wh from "../../Assests/wh.svg"

const FirstDiv = styled(Box)`
  display:flex;
  align-items:center;
  
  margin-left:50px;
  
  
  
`;

const Components= styled(Link)`
color :gray;
list-style:none;
text-decoration:none;
font-size:18px;
padding:10px;
padding-right:5px;

`
const MainDiv = styled(Box)`

width:100%;
margin-top:30px;


`
const SecondDiv = styled(Box)`
display:flex;
justify-content:center;
align-items:center;
color :gray;

`
const ThirdDiv= styled(Box)`
display:flex;
justify-content:center;
align-items:center;
margin-top:7px;
color :gray;
`

function Footer() {
  return (
    <MainDiv >
      <FirstDiv>
      <Components to="/Return" style={{marginLeft:'30%'}}>
        <li>
          Return Policy
         </li>
      </Components>
      <Components to="/About">
        <li>
          About Us
         </li>
      </Components>
      <Components to="/Contact">
        <li>
          Contact Us
         </li>
      </Components>
      <Components to="/Exchange">
        <li>
          Exchange Policy
         </li>
      </Components>
      <Components  to="/Feedback">
        <li>Feedback</li>
      </Components>
      </FirstDiv>
      <SecondDiv>
        <Typography>©2024 Digital Shop.in</Typography>
      </SecondDiv>
      <ThirdDiv>
       <img src={insta} alt="" width={20} height={20} style={{margin:3}}/>
       <img src={facebook} alt="" width={20} height={20} style={{margin:3}}/>
       <img src={wh} alt="" width={20} height={20} style={{margin:3}}/>
      </ThirdDiv>
      
    </MainDiv>
  
  );
}

export default Footer;
