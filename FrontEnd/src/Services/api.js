import axios from 'axios';

const URL = 'http://localhost:3001';

export const authenticsingup = async (data) => {
    try {
       return await axios.post(`${URL}/signup`, data)
    }
    catch (error)
    {
        console.log('error while calling signup api', error.message);
    }
}

export const authenticLogin = async (data) => {
    try {
        return await axios.post(`${URL}/login`, data)
    }
    catch (error) {
        console.log('error while calling signup api', error.message);
        return error.response;
    }
}


export const authenticConfirmUser = async (data) => {
    try {
      const response = await axios.post("http://localhost:3001/orders", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error while calling API:", error.response?.data || error.message);
      throw error; // Ensure the error propagates
    }
  };