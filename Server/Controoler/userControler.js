
import User from '../model/use-schema.js'


export const userSignup = async(request,response) => {
    try {

        const exist = await User.findOne({username:request.body.username})
        if(exist){
            return response.status(401).json({message:"Username alrady exist"})
        }
        const user = request.body;
        const newUser = new User(user);
        await newUser.save();
        response.status(200).json({ message:"Signup successfully", user })
        console.log(request.body);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
}


export const userLogin =async(request,response) => {
 try {
     const username = request.body.username;
     const password = request.body.password;

     let user = await User.findOne({ username: username, password: password });
     if (user) {
         return response.status(200).json({message:"Login Successfully",data:user});
     }
     else {
         return response.status(401).json('invalid Login')
     }
 } catch (error) {
    response.status(500).json('Error',error.message)
 }   
}

  export const deleteUserById = async (req, res) => {
    let id = req.params.id;
    let user = await User.findByIdAndDelete(id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found with the given ID" });
    }
  
    res.status(200).json({ message: "User has been deleted", user });
  };

  export const userlist = async (request,responce)=>{
    try{
        const users = await User.find();
        responce.json({success:true,users});
    }
    catch(error){
        responce.status(500).json({ success:false,message: 'failed to fetch',error:error.message})
    }
 }