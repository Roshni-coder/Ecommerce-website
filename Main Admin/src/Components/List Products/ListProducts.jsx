import React, { useEffect, useState } from "react";
import "./ListProduct.css";

function ListProducts() {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchInfo = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setAllProducts(data);
      setError(""); // Clear any previous error on successful fetch
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  if (loading) {
    return <p>Loading products...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  if (allProducts.length === 0) {
    return <p>No products available.</p>;
  }

  const removeProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3001/product/${productId}`, {
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
      <h2>All Products List</h2>
      <div className="listproduct-format-main"  style={{fontWeight:600}}>
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
