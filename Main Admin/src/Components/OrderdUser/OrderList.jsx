import React, { useEffect, useState } from "react";
import "./OrderList.css";


function OrderList() {
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
      <h2>Ordered List</h2>
      <div className="listproduct-format-main" style={{fontWeight:600}}>
        {/* <div>Order ID</div> */}
        <p>Fullname</p>
        <p>Email</p>
        <p>City</p>
        <p>Pincode</p>
        <p>State</p>
        <p>Phone</p>
        <p>Total Amount</p>
        <p>Order Date</p>
      </div>
      <hr />
      {orders.map((order) => {
      //  const formattedDate = order.orderDate && !isNaN(new Date(order.orderDate).getTime())
      //  ? new Date(order.orderDate).toLocaleDateString()
      //  : "N/A";
     

        return (
          <div className="listproduct-allproducts">
          <div key={order._id} className="listproduct-format-main listproduct-format">
            {/* <div>{order._id || "N/A"}</div> */}
            <div>{order.fullname || "N/A"}</div>
            <div>{order.email || "N/A"}</div>
            <div>{order.city || "N/A"}</div>
            <div>{order.pincode || "N/A"}</div>
            <div>{order.state || "N/A"}</div>
            <div>{order.phone || "N/A"}</div>
            <div>₹{order.totalAmount || "N/A"}</div>
            <div>{new Date(order.createdAt).toLocaleDateString()}</div>
            <button className="remove" onClick={() => removeProduct(order._id)}>
              Remove
            </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default OrderList;
