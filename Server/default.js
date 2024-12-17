
import { products } from "./Constanse/data.js";
import Product from "./model/model-schema.js";

const defaultData = async()=>{
    try {
    await Product.insertMany(products);
     console.log("Data inserted succesfully...")
 } catch (error) {
    console.log("Error while insering data",error.message)
 }   
}
export default defaultData;