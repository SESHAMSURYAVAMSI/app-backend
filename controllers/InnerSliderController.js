 const InnerSlider =
require("../models/InnerSliderModel");


// CREATE INNER SLIDER

const createInnerSlider = async (req, res) => {

    try {

        console.log(req.file);

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image is required"

            });

        }

        const data = await InnerSlider.create({

            // AWS IMAGE URL

            image: req.file.location,

            status: req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Inner Slider Created Successfully",

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




// GET ALL INNER SLIDERS

const getInnerSliders = async (req, res) => {

    try {

        const data =
        await InnerSlider.find();

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




// GET SINGLE INNER SLIDER

const getSingleInnerSlider =
async (req, res) => {

    try {

        const data =
        await InnerSlider.findById(
            req.params.id
        );

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




// UPDATE INNER SLIDER

const updateInnerSlider =
async (req, res) => {

    try {

        const updateData = {

            status: req.body.status

        };

        // IF NEW IMAGE

        if (req.file) {

            updateData.image =
                req.file.location;

        }

        const data =
        await InnerSlider.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );

        res.status(200).json({

            success: true,

            message:
                "Inner Slider Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// DELETE INNER SLIDER

const deleteInnerSlider =
async (req, res) => {

    try {

        await InnerSlider.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Inner Slider Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createInnerSlider,

    getInnerSliders,

    getSingleInnerSlider,

    updateInnerSlider,

    deleteInnerSlider

};