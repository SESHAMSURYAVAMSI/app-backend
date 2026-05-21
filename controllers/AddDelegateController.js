 const AddDelegate =
require("../models/AddDelegateModel");


// CREATE ADD DELEGATE

const createAddDelegate = async (req, res) => {

    try {

        

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image is required"

            });

        }

        

        const existingEmail =
        await AddDelegate.findOne({

            email: req.body.email

        });

        if (existingEmail) {

            return res.status(400).json({

                success: false,

                message: "Email Already Exists"

            });

        }

        const data = await AddDelegate.create({

            name: req.body.name,

            email: req.body.email,

            designation: req.body.designation,

            

            image: req.file.location,

            status: req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Delegate Added Successfully",

            data

        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






const getAddDelegates = async (req, res) => {

    try {

        const data =
        await AddDelegate.find();

        res.status(200).json({

            success: true,

            count: data.length,

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






const getSingleAddDelegate =
async (req, res) => {

    try {

        const data =
        await AddDelegate.findById(
            req.params.id
        );

        if (!data) {

            return res.status(404).json({

                success: false,

                message:
                    "Delegate Not Found"

            });

        }

        res.status(200).json({

            success: true,

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






const updateAddDelegate =
async (req, res) => {

    try {

        const updateData = {

            name: req.body.name,

            email: req.body.email,

            designation:
                req.body.designation,

            status: req.body.status

        };

    

        if (req.file) {

            updateData.image =
                req.file.location;

        }

        const data =
        await AddDelegate.findByIdAndUpdate(

            req.params.id,

            updateData,

            {
                new: true,
                runValidators: true
            }

        );

        res.status(200).json({

            success: true,

            message:
                "Delegate Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






const deleteAddDelegate =
async (req, res) => {

    try {

        await AddDelegate.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Delegate Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createAddDelegate,

    getAddDelegates,

    getSingleAddDelegate,

    updateAddDelegate,

    deleteAddDelegate

};