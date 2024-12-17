import React, { useEffect, useState } from 'react';
import './Userlist.css';

const Userlist = () => {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState('');

    // Fetch the users from the backend on component mount
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch('http://localhost:3001/userList', {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            const contentType = response.headers.get('content-type');

            if (response.ok) {
                if (contentType && contentType.includes('application/json')) {
                    const data = await response.json();
                    setUsers(data.users);
                } else {
                    console.error('Unexpected content-type:', contentType);
                    setError('Unexpected content-type from server.');
                }
            } else {
                const errorText = await response.text();
                console.error('Error Response:', errorText);
                setError(`Failed to fetch users. Server responded with: ${errorText}`);
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Error fetching user data: ' + error.message);
        }
    };

    const removeProduct = async (userId) => {
        try {
          const response = await fetch(`http://localhost:3001/user/${userId}`, {
            method: "DELETE",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          });
           
          if(response.ok){
            confirm("User deleted .....")
          }
          if (!response.ok) {
            throw new Error("Failed to remove user");
          }
    
          // Refresh the product list
          await fetchInfo();
        } catch (err) {
          setError(err.message);
        }
      };

    return (
        <div className="list-product">
            <h2>User List</h2>
            <div className="listproduct-format-main" style={{fontWeight:600}}>
                <p>Firstname</p>
                <p>Lastname</p>
                <p>Username</p>
                <p>Email</p>
                <p>Password</p>
                <p>Phone</p>
            </div>
            <div className="listproduct-allproducts">
                <hr />
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.email} className="listproduct-format-main listproduct-format">
                            <p>{user.firstname}</p>
                            <p>{user.lastname}</p>
                            <p>{user.username}</p>
                            <p>{user.email}</p>
                            <p>{user.password}</p>
                            <p>{user.phone}</p>
                            <button className="remove" onClick={() => removeProduct(user._id)}>
                                Remove
                            </button>
                        </div>
                    ))
                ) : (
                    <p>No users found</p>
                )}
            </div>
        </div>
    );
};

export default Userlist;
