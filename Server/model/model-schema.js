import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique:true
    },
    url: String,
    detailurl: String,
    title: Object,
    price: Object,
    category:String,
    quantity: Number,
    description: String,
    discount: String,
    tagline: String
});

const Product = mongoose.model('products', ProductSchema);
export default Product;