const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const SupplierUser = require('../models/supplieruser'); // Your supplieruser model
const secret = "mysecretkey"; // For JWT, should be stored in .env

// Register a new user
exports.register = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    // Check if user already exists
    let user = await SupplierUser.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    
    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new SupplierUser({ name, email, password: hashedPassword, role });
    await user.save();

    res.status(201).json({ msg: "User registered successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Check if user exists
    const user = await SupplierUser.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    // Create JWT token
    const token = jwt.sign({ userId: user._id, role: user.role }, secret, { expiresIn: "1h" });
    res.json({ token });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};

// Get current user
exports.getUser = async (req, res) => {
  try {
    const user = await SupplierUser.findById(req.user.userId).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
};
