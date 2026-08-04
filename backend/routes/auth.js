const express = require("express");
const router = express.Router();

const bcrypt = require("bcryptjs");
const User = require("../models/User");


// ======================
// REGISTER USER
// ======================

router.post("/register", async (req, res) => {

    try {

        const {
            name,
            email,
            password,
            company,
            role
        } = req.body;


        // Check required fields
        if (!name || !email || !password || !role) {

            return res.status(400).json({
                message: "Please fill all required fields"
            });

        }


        // Allowed roles
        const allowedRoles = [
            "student",
            "employer",
            "admin"
        ];


        if (!allowedRoles.includes(role)) {

            return res.status(400).json({
                message: "Invalid role selected"
            });

        }



        // Check existing email

        const existingUser = await User.findOne({
            email
        });


        if (existingUser) {

            return res.status(400).json({
                message: "Email already exists"
            });

        }



        // Hash password

        const hashedPassword = await bcrypt.hash(
            password,
            10
        );



        // Create user

        const newUser = new User({

            name,

            email,

            password: hashedPassword,

            company: company || "",

            role

        });



        await newUser.save();



        res.status(201).json({

            message: "Registration Successful",

            user: {

                _id: newUser._id,
                id: newUser._id,
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                company: newUser.company || "",
                university: newUser.university || "",
                degree: newUser.degree || "",
                skills: newUser.skills || [],
                profilePhoto: newUser.profilePhoto || newUser.profileImage || "",
                profileImage: newUser.profilePhoto || newUser.profileImage || ""

            }

        });



    } catch(error) {


        console.log(error);


        res.status(500).json({

            message: "Server Error"

        });


    }


});




// ======================
// LOGIN USER
// ======================


router.post("/login", async (req,res)=>{


    try{


        const {
            email,
            password
        } = req.body;



        if(!email || !password){

            return res.status(400).json({

                message:"Email and password required"

            });

        }



        // Find user

        const user = await User.findOne({
            email
        });



        if(!user){

            return res.status(400).json({

                message:"User not found"

            });

        }



        // Compare password

        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );



        if(!passwordMatch){

            return res.status(400).json({

                message:"Incorrect password"

            });

        }



        // Successful login

        res.status(200).json({

            message:"Login Successful",

            user:{

                _id:user._id,
                id:user._id,
                name:user.name,
                email:user.email,
                role:user.role,
                company:user.company || "",
                university:user.university || "",
                degree:user.degree || "",
                skills:user.skills || [],
                profilePhoto:user.profilePhoto || user.profileImage || "",
                profileImage:user.profilePhoto || user.profileImage || ""

            }


        });



    }catch(error){


        console.log(error);


        res.status(500).json({

            message:"Server Error"

        });


    }


});



module.exports = router;