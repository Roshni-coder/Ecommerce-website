import mongoose from "mongoose";
import jwt from "jsonwebtoken"

// Admin Schema
const Admin = mongoose.model('Admin', {
  name: {
    type: String,
    unique: true, // Ensures unique usernames
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  loggedIn: {
    type: Boolean,
    default: false,
  },
});

// Admin Signup Route

app.post('/adminsignup', async (req, res) => {
  try {
    const { name, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ success: false, message: 'Name and password are required.' });
    }

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ name });
    if (existingAdmin) {
      return res.status(400).json({ success: false, message: 'Admin already exists.' });
    }

    // Create a new admin
    const newAdmin = new Admin({ name, password });

    await newAdmin.save();

    res.status(201).json({ success: true, message: 'Admin created successfully.' });
  } catch (error) {
    console.error('Error during signup:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
});


// Admin Login Route


export const AdminLogin= async( req,res)=>{
  try {
    // Check if too many admins are logged in
    const count = await Admin.countDocuments({ loggedIn: true });
    if (count >= 10) {
      return res.status(403).json({ success: false, message: 'Too many admins logged in.' });
    }

    // Find admin by username and password
    const admin = await Admin.findOne({ name: req.body.name, password: req.body.password });
    if (!admin) {
      return res.status(400).json({ success: false, message: 'Admin does not exist or invalid credentials.' });
    }

    // Check if already logged in
    if (admin.loggedIn) {
      return res.status(400).json({ success: false, message: 'Admin is already logged in.' });
    }

    // Mark admin as logged in
    admin.loggedIn = true;
    await admin.save();

    // Generate token
    const token = jwt.sign({ admin: { id: admin.id } }, 'secret-ecom', { expiresIn: '1h' });

    res.status(200).json({ success: true, token });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}