import user from "../model/use-schema.js";

 export const userlist = async (request,responce)=>{
    try{
        const users = await user.find();
        responce.json({success:true,users});
    }
    catch(error){
        responce.status(500).json({ success:false,message: 'failed to fetch',error:error.message})
    }
 }