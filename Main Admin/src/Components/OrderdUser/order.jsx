import React, { useEffect, useState } from "react";
import "./ListProduct.css";

function ListProducts() {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchOrders = async () => {
        try {
            const response = await fetch("http://localhost:3001/orderdlist");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setOrders(data.orders || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
  
      fetchOrders();
    }, []);
  
    if (loading) return <p>Loading orders...</p>;
    if (error) return <p style={{ color: "red" }}>{error}</p>;
    if (orders.length === 0) return <p>No orders available.</p>;
    const removeProduct = async (orderId) => {
        try {
          const response = await fetch(`http://localhost:3001/deleteorders/${orderId}`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
           
          if(response.ok){
            confirm("product will be delete .....")
          }
          if (!response.ok) {
            throw new Error("Failed to remove product");
          }
    
          // Refresh the product list
          await fetchInfo();
        } catch (err) {
          setError(err.message);
        }
      };
  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>ShortTitle</p>
        <p>Cost</p>
        <p>TagLine</p>
        <p>Category</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product) => (
          <div key={product._id} className="listproduct-format-main listproduct-format">
            <p>{product.title.shortTitle}</p>
            <p>${product.price.cost}</p>
            <p>{product.tagline}</p>
            <p>{product.category}</p>
            <button className="remove" onClick={() => removeProduct(product._id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListProducts;
