import React, { useState } from 'react'
import './AddProduct.css'

function AddProduct() {
  const [productDetails, setProductDetails] = useState({
    id: "",
    url: "",
    title: {
      shortTitle: "",
      longTitle: ""
    },
    price: {
      mrp: '',
      cost: ''
    },
    category: "",
    quantity: "",
    description: "",
    discount: "",
    tagline: ""
  })

  const changeHandler = (e) => {
    const { id, value } = e.target;

    if (id === "shortTitle" || id === "longTitle") {
      setProductDetails(prevState => ({
        ...prevState,
        title: { ...prevState.title, [id]: value }
      }));
    } else if (id === "mrp" || id === "cost") {
      setProductDetails(prevState => ({
        ...prevState,
        price: { ...prevState.price, [id]: value }
      }));
    } else {
      setProductDetails(prevState => ({
        ...prevState,
        [id]: value
      }));
    }
  }

  const addProduct = async () => {
    try {
      console.log(productDetails);
  
      const response = await fetch('http://localhost:3001/add', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productDetails),
      });
  
      const data = await response.json();
  
      if (!data.success) {
        alert("Product Added Successfully!");
        // Optionally reset form fields or provide further feedback to the user here
      } else {
        alert("Failed to add product.");
      }
    } catch (error) {
      console.error("Error adding product:", error);
      alert("An error occurred while adding the product. Please try again.");
    }
  };
  
  return (
    <div className='addproduct'>
      <h2 style={{textAlign:'center'}}>Add Product Items</h2>
      <div className="addproduct-items" style={{fontWeight:600}}>
        <div className="url">
          <p>Id :</p>
          <input id="id" value={productDetails.id} onChange={changeHandler} type="text" placeholder='Type here' />
          <p>Product Url :</p>
          <input id="url" value={productDetails.url} onChange={changeHandler} type="text" placeholder='Type here' />
        </div>
     
      
      <div className="title">
        <div className="short-title">
          <p>Short Title :</p>
          <input id="shortTitle" value={productDetails.title.shortTitle} onChange={changeHandler} type="text" placeholder='Type here' />
          <p>Long Title :</p>
          <input id="longTitle" value={productDetails.title.longTitle} onChange={changeHandler} type="text" placeholder='Type here' />
        </div>
      </div>
      
      <div className="price">
        <p>MRP :</p>
        <input id="mrp" value={productDetails.price.mrp} onChange={changeHandler} type="text" placeholder='Type here' />
        <p>Cost :</p>
        <input id="cost" value={productDetails.price.cost} onChange={changeHandler} type="text" placeholder='Type here' />
      </div>
      
      <div className="category">
        <p>Category :</p>
        <input id="category" value={productDetails.category} onChange={changeHandler} type="text" placeholder='Type here' />
      </div>
      
      <div className="description">
        <p>Description:</p>
        <input id="description" value={productDetails.description} onChange={changeHandler} type="text" placeholder='Type here' />
      </div>
      
      <div className="discount">
        <p>Discount :</p>
        <input id="discount" value={productDetails.discount} onChange={changeHandler} type="text" placeholder='Type here' />
      </div>
      
      <div className="tagline">
        <p>Tagline :</p>
        <input id="tagline" value={productDetails.tagline} onChange={changeHandler} type="text" placeholder='Type here' />
      </div>
      
      <div className="quantity">
        <p>Quantity :</p>
        <input id="quantity" value={productDetails.quantity} onChange={changeHandler} type="text" placeholder='Type here' />
      </div>
      
      <div className="add">
        <button className='addbtn' onClick={()=>{addProduct()}}> Add Product</button>
      </div>
      </div>
    </div>
  )
}

export default AddProduct;
