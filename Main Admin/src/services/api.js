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
