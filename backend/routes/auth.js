const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const User = require("../models/User");

// ======================
// Register
// ======================

router.post("/register", async (req, res) => {

    try {

        const { name, email, password, company, role } = req.body;

        // Check required fields
        if (!name || !email || !password || !role) {
            return res.status(400).json({
                message: "Please fill in all required fields."
            });
        }

        // Check if email already exists
        const existUser = await User.findOne({ email });

        if (existUser) {
            return res.status(400).json({
                message: "Email already exists."
            });
        }
        // Password validation
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{6,}$/;

if (!passwordRegex.test(password)) {
    return res.status(400).json({
        message: "Password must be at least 6 characters long and contain at least one letter and one number."
    });
}

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            company,
            role
        });

        await newUser.save();

        res.status(201).json({
            message: "Registration Successful",
            user: {
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                company: newUser.company
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});


// ======================
// Login
// ======================

router.post("/login", async (req, res) => {

    try {

        const { email, password } = req.body;

        // Check required fields
        if (!email || !password) {
            return res.status(400).json({
                message: "Email and password are required."
            });
        }

        // Find user
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({
                message: "User not found."
            });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({
                message: "Incorrect password."
            });
        }

        // Login successful
        res.status(200).json({
            message: "Login Successful",
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                company: user.company
            }
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });

    }

});

module.exports = router;