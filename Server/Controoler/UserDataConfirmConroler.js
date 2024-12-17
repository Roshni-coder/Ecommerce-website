import UserData from "../model/userData-schema.js";  // Ensure the model is correctly imported

export const userConfirm = async (request, response) => {
   try {
      // Check if email already exists
      const exist = await UserData.findOne({ email: request.body.email });
      if (exist) {
         return response.status(401).json({ message: "Email already exists" });
      }

      // Use request body data
      const userData = request.body;
      const newUserData = new UserData(userData);  // Use UserData model here
      await newUserData.save();  // Save the new user data

      response.status(200).json({ message: "User data saved successfully", userData });
   } catch (error) {
      console.error("Error saving user data:", error);  // Log the error for debugging
      response.status(500).json({ message: "Error saving user data", error: error.message });  // Send error response
   }
}



export const userOrderdlist = async (request,responce)=>{
   try{
       const userData = await UserData.find();
       responce.json({success:true,userData});
   }
   catch(error){
       responce.status(500).json({ success:false,message: 'failed to fetch',error:error.message})
   }
}