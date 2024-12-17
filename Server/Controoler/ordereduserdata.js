
import Order from '../model/Orderduser.js'

export const createOrder = async (req, res) => {
  const { fullname, email, address, city, pincode, state, phone, totalAmount } = req.body;

  // Validate required fields
  if (!fullname || !email || !address || !city || !pincode || !state || !phone) {
    return res.status(400).json({ error: "All fields are required." });
  }

  // Validate field formats
  if (!/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ error: "Invalid pincode format." });
  }

  if (!/^\d{10}$/.test(phone)) {
    return res.status(400).json({ error: "Invalid phone number." });
  }

  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
    return res.status(400).json({ error: "Invalid email format." });
  }

  // Save the order to the database
  try {
    const newOrder = new Order({
      fullname,
      email,
      address,
      city,
      pincode,
      state,
      phone,
      totalAmount,
    });

    await newOrder.save(); // Save the order in MongoDB

    res.status(201).json({ message: "Order placed successfully!", order: newOrder });
  } catch (error) {
    res.status(500).json({ error: "Failed to create the order.", details: error.message });
  }
};
export const userOrderdlist = async (req, res) => {
  try {
    const orders = await Order.find();  // Fetch orders from the database
    console.log("Fetched Orders:", orders);  // Log the orders data
    res.json({ success: true, orders });  // Return orders instead of users
  } catch (error) {
    console.error("Error fetching orders:", error);  // Log the error
    res.status(500).json({ success: false, message: 'Failed to fetch', error: error.message });
  }
};


export const deleteUserOrderById = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await Order.findByIdAndDelete(id);
    
    if (!user) {
      return res.status(404).json({ message: "User not found with the given ID" });
    }

    res.status(200).json({ message: "User has been deleted", user });
  } catch (error) {
    res.status(500).json({ message: "An error occurred while deleting the order", error: error.message });
  }
};
