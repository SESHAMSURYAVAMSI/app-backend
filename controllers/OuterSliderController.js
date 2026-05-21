 const OuterSlider =
require("../models/OuterSliderModel");


// CREATE OUTER SLIDER

const createOuterSlider = async (req, res) => {

    try {

        

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image is required"

            });

        }

        const data = await OuterSlider.create({

            // AWS IMAGE URL

            image: req.file.location,

            eventName: req.body.eventName,

            location: req.body.location,

            status: req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Outer Slider Created Successfully",

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




// GET ALL OUTER SLIDERS

const getOuterSliders = async (req, res) => {

    try {

        const data =
        await OuterSlider.find();

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




// GET SINGLE OUTER SLIDER

const getSingleOuterSlider =
async (req, res) => {

    try {

        const data =
        await OuterSlider.findById(
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




// UPDATE OUTER SLIDER

const updateOuterSlider =
async (req, res) => {

    try {

        const updateData = {

            eventName: req.body.eventName,

            location: req.body.location,

            status: req.body.status

        };

        // IF NEW IMAGE

        if (req.file) {

            updateData.image =
                req.file.location;

        }

        const data =
        await OuterSlider.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );

        res.status(200).json({

            success: true,

            message:
                "Outer Slider Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// DELETE OUTER SLIDER

const deleteOuterSlider =
async (req, res) => {

    try {

        await OuterSlider.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Outer Slider Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createOuterSlider,

    getOuterSliders,

    getSingleOuterSlider,

    updateOuterSlider,

    deleteOuterSlider

};