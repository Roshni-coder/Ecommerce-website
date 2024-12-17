
import AdminUser from '../model/adminUser.js';

// Signup Controller
export const signupAdminUser = async (request, response) => {
    try {

        const exist = await AdminUser.findOne({username:request.body.username})
        if(exist){
            return response.status(401).json({message:"Username alrady exist"})
        }
        const user = request.body;
        const newUser = new AdminUser(user);
        await newUser.save();
        response.status(200).json({ message:"Signup successfully", user })
        console.log(request.body);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
};

// Login Controller
export const loginAdminUser = async (request, response) => {
    try {
        const email = request.body.email;
        const password = request.body.password;
   
        let user = await AdminUser.findOne({ email: email, password: password });
        if (user) {
            return response.status(200).json({message:"Login Successfully",data:user});
        }
        else {
            return response.status(401).json('invalid Login')
        }
    } catch (error) {
       response.status(500).json('Error',error.message)
    }   
};
