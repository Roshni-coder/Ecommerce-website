import mongoose from 'mongoose';

// Define the User Schema
const adminUserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: true,
      trim: true,
      minlength: [3, 'Username must be at least 3 characters'],
      maxlength: [50, 'Username must be less than 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      match: [/\S+@\S+\.\S+/, 'Email is invalid'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters long'],
    },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
  }
);



// Export the model
const AdminUser = mongoose.model('AdminUser', adminUserSchema);

export default AdminUser;
