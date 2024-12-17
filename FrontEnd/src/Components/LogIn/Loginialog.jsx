import React, { useState, useContext } from "react";
import { Button, Dialog, Typography, styled } from "@mui/material";
import { Box, TextField } from "@mui/material";
import { authenticLogin, authenticsingup } from "../../Services/api";

import { DataContext } from "../../Context/DataProvider";
const Component = styled(Box)`
  height: 80vh;
  width: 40vw;
`;
const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > Button,
  p {
    margin-top: 15px;
  }
`;
const Loginbtn = styled(Button)`
  text-tranfrom: none;
  background: #fb641b;
  color: white;
  height: 48px;
  border-radius: 2px;
  
`;
const ReqOTP = styled(Button)`
  text-tranfrom: none;
  background: white;
  height: 48px;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/20%);
`;

const Text = styled(Typography)`
  font-size: 13px;
  color: #878787;

`;
const CreateAccount = styled(Typography)`
  font-size: 14px;
  text-align: center;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;
const Error = styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-wight:800;
`

const accountInitialvalue = {
  login: {
    view: "login",
  },
  signup: {
    view: "signup",
  },
};

const signupInitialvalue = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const LoginInitialvalue = {
  username:'',
  password:''
}
export default function Loginialog({ open, setopen }) {
  const [account, toggleaccount] = useState(accountInitialvalue.login);
  const [signup, setsignup] = useState(signupInitialvalue);

  const [error, setError] = useState(false);

  const { setAccount } = useContext(DataContext);
  const [login, setLogin] = useState(LoginInitialvalue);

  const handleClose = () => {
    setopen(false);
    toggleaccount(accountInitialvalue.login);
    setError(false);
  };
  const togglesignup = () => {
    toggleaccount(accountInitialvalue.signup);
  };

  const onInputChange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
    console.log(signup);
  };

  const signupUser = async () => {
    let response = await authenticsingup(signup);
    if (!response) return;
    handleClose();
    setAccount(signup.firstname);
  };


  const onValueChange = (e) => {
    setLogin({...login,[e.target.name]:e.target.value})
  }

  const LoginUser = async() => {
    let response = await authenticLogin(login);
    console.log(response);
    if (response.status === 200) {
      handleClose();
      setAccount(response.data.data.firstname);
    } else {
      setError(true);
    }
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{ sx: { maxWidth: "unset" } }}
    >
      <Component>
        {account.view === "login" ? (
          <Wrapper>
            <h1 style={{textAlign:'center'}}>LogIn</h1>
            <TextField
              variant="standard"
              onChange={(e) => onValueChange(e)}
              name="username"
              label="Enter Username"
            />
            {error &&
              <Error>Please enter valid username and password</Error>
            }
            <TextField
            variant="standard" onChange={(e) => onValueChange(e)} name="password" label="Enter Password" style={{marginTop:20}} />
            <Text>
              By Continuing, you aree to Eshop's Term of Use and Privacy Policy,
            </Text>
            <Loginbtn onClick={()=>{LoginUser()}} style={{marginTop:30}}>Login</Loginbtn>
            <Typography style={{ textAlign: "center" }}>OR</Typography>
            <CreateAccount onClick={() => togglesignup()}>
              New to Digital Shop ? Create an account
            </CreateAccount>
          </Wrapper>
        ) : (
          <Wrapper>
            <h1 style={{textAlign:'center'}}>Sign Up</h1>
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="firstname"
              label="Enter Firstname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="lastname"
              label="Enter Lastname"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="username"
              label="Enter username"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="email"
              label="Enter email"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="password"
              label="Enter Password"
            />
            <TextField
              variant="standard"
              onChange={(e) => onInputChange(e)}
              name="phone"
              label="Enter Phone"
            />
            <Loginbtn onClick={() => signupUser()}>Continue</Loginbtn>
          </Wrapper>
        )}
      </Component>
    </Dialog>
  );
}
