import React, { useState,useEffect } from "react";
import { Box, styled, TextField, Button,Typography } from "@mui/material";
import { authenticConfirmUser } from "../../Services/api.js";

const Components = styled(Box)`
  background: #fff;
  width: 45%;
  margin: auto;
  margin-top: 5%;
  height:90vh;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin: auto;
  & > Button {
    margin-top: 15px;
  }
`;

const Confirmbtn = styled(Button)`
  background: #fb641b;
  color: white;
  height: 50px;
  border-radius: 2px;
  width: 97%;
  margin: auto;
`;

const Textview = styled(TextField)`
  margin: 7px;
`;

const TotalAmount = styled(Box)`
  text-align: center;
  margin: 10px 0;
  font-size: 18px;
  font-weight: 600;
`;


const ConfirmInitialValue = {
  fullname: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
  state: "",
  phone: "",
};

function Payment() {
  const [confirm, setConfirm] = useState(ConfirmInitialValue);
  const [error, setError] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    // Retrieve total amount from localStorage
    const storedTotalAmount = localStorage.getItem('totalAmount');
    if (storedTotalAmount) {
      setTotalAmount(parseFloat(storedTotalAmount));
    }
  }, []);
  const onInputChange = (e) => {
    setConfirm({ ...confirm, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    const { fullname, email, address, city, pincode, state, phone } = confirm;
    if (!fullname || !email || !address || !city || !pincode || !state || !phone) {
      return "All fields are required.";
    }
    if (!/^\d{6}$/.test(pincode)) {
      return "Pincode must be a 6-digit number.";
    }
    if (!/^\d{10}$/.test(phone)) {
      return "Phone number must be a 10-digit number.";
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      return "Invalid email format.";
    }
    return null;
  };

  // const confirmUser = async () => {
  //   const validationError = validateInputs();
  //   if (validationError) {
  //     setError(validationError);
  //     return;
  //   }
  //   setError(""); // Clear previous errors

  //   try {
  //     const response = await authenticConfirmUser(confirm);
  //     if (response) {
  //       alert("Order placed successfully!");
  //     } else {
  //       alert("Something went wrong. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error("Error during API call:", err);
  //     alert("An error occurred. Please try again.");
  //   }
  // };
  // const confirmUser = async () => {
  //   const validationError = validateInputs();
  //   if (validationError) {
  //     setError(validationError);
  //     return;
  //   }
  //   setError(""); // Clear previous errors
  
  //   try {
  //     console.log("Payload being sent:", confirm); // Log payload
  //     const response = await authenticConfirmUser(confirm);
  //     console.log("API Response:", response); // Log response
  //     if (response) {
  //       alert("Order placed successfully!");
  //     } else {
  //       alert("Something went wrong. Please try again.");
  //     }
  //   } catch (err) {
  //     console.error("Error during API call:", err.response?.data || err.message); // Log detailed error
  //     alert("An error occurred. Please try again.");
  //   }
  // };
  const confirmUser = async () => {
    const validationError = validateInputs();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError(""); // Clear previous errors
  
    try {
      const payload = { ...confirm, totalAmount }; // Include totalAmount
      console.log("Payload being sent:", payload); // Log payload
      const response = await authenticConfirmUser(payload);
      console.log("API Response:", response); // Log response
      if (response) {
        alert("Order placed successfully!");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error during API call:", err.response?.data || err.message); // Log detailed error
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <Components>
      <Wrapper>
        <h2 style={{ textAlign: "center" }}>Confirm Order</h2>
        {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="fullname"
          label="Enter Your Full Name"
        />
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="email"
          label="Enter Your Email"
        />
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="address"
          label="Enter Your Address"
        />
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="city"
          label="Enter Your City"
        />
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="pincode"
          label="Enter Your Pincode"
        />
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="state"
          label="Enter Your State"
        />
        <Textview
          variant="standard"
          onChange={onInputChange}
          name="phone"
          label="Enter Your Phone Number"
        />
        <TotalAmount>Total Amount: ₹{totalAmount}</TotalAmount>
        <Confirmbtn onClick={confirmUser}>Confirm</Confirmbtn>
      </Wrapper>
    </Components>
  );
}

export default Payment;
