
import Product from "../model/model-schema.js"

export const getProducts= async(request,response)=>{
try {
 const products  = await Product.find({});
 response.status(200).json(products);
} catch (error) {
    response.status(500).json({meassage:error.meassage});
}
}

export const getProductsById = async (request,response)=>{
    try {
        const id = request.params.id;
         const product = await Product.findOne({'id':id})
         response.status(200).json(product)
         
    } catch (error) {
        response.status(500).json({message:error.message})
    }
}

export const addProduct = async (req, res) => {
    const {id,url,detailurl, title,price,category,quantity,description,discount,tagline  } = req.body;
    try {
      let product = await Product.create(
        { id,url,detailurl, title,price,category,quantity,description,discount,tagline }
      );
      res.json({ message: "product added successfully ...!", product });
    } catch (error) {
      res.json(error.message);
    }
  };

  export const deleteProductById = async (req, res) => {
    let id = req.params.id;
    let product = await Product.findByIdAndDelete(id);
    
    if (!product) {
      return res.status(404).json({ message: "Product not found with the given ID" });
    }
  
    res.status(200).json({ message: "Product has been deleted", product });
  };
  