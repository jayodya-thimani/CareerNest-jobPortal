const express = require("express");

const router = express.Router();

const User = require("../models/User");



// =============================
// GET STUDENT PROFILE
// =============================

router.get("/:id", async (req, res) => {

    try {


        const user = await User.findById(
            req.params.id
        ).select("-password");


        if (!user) {

            return res.status(404).json({

                message:"Student not found"

            });

        }



        // Check role

        if(user.role !== "student"){

            return res.status(403).json({

                message:"This profile is not a student account"

            });

        }



        res.status(200).json(user);



    } catch(error) {


        res.status(500).json({

            message:error.message

        });


    }


});







// =============================
// UPDATE STUDENT PROFILE
// =============================

router.put("/:id", async (req,res)=>{


    try{


        const {

            name,

            email,

            university,

            degree,

            phone,

            location,
            profileImage,
            profilePhoto,
            skills


        } = req.body;





        const existingUser = await User.findById(req.params.id);


        if(!existingUser){


            return res.status(404).json({

                message:"Student not found"

            });


        }


        if(existingUser.role !== "student"){

            return res.status(403).json({

                message:"This profile is not a student account"

            });

        }


        const updatedUser =

        await User.findByIdAndUpdate(


            req.params.id,


            {

                name: name ?? existingUser.name,
                email: email ?? existingUser.email,
                university: university ?? existingUser.university,
                degree: degree ?? existingUser.degree,
                phone: phone ?? existingUser.phone,
                location: location ?? existingUser.location,
                profileImage: profileImage ?? profilePhoto ?? existingUser.profileImage ?? existingUser.profilePhoto ?? "",
                profilePhoto: profileImage ?? profilePhoto ?? existingUser.profileImage ?? existingUser.profilePhoto ?? "",
                skills: skills ?? existingUser.skills,
                password: existingUser.password


            },


            {

                new:true,

                runValidators:true

            }


        ).select("-password");






        if(!updatedUser){


            return res.status(404).json({

                message:"Student not found"

            });


        }






        res.status(200).json({

            message:"Profile updated successfully",

            user:updatedUser

        });





    }

    catch(error){


        res.status(500).json({

            message:error.message

        });


    }


});





module.exports = router;