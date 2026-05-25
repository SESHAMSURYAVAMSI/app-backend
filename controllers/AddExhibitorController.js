const AddExhibitor =
require("../models/AddExhibitorModel");


// CREATE
const createExhibitor =
async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image is required"

            });

        }

        const data =
        await AddExhibitor.create({

            name: req.body.name,

            stall: req.body.stall,

            hall: req.body.hall,

            exhibitorTypeId:
                req.body.exhibitorTypeId,

            image:
                req.file.location,

            description:
                req.body.description,

            status:
                req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Exhibitor Created Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// GET ALL
const getAllExhibitors =
async (req, res) => {

    try {

        const data =
        await AddExhibitor.find();

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


// GET SINGLE
const getSingleExhibitor =
async (req, res) => {

    try {

        const data =
        await AddExhibitor.findById(
            req.params.id
        );

        if (!data) {

            return res.status(404).json({

                success: false,

                message:
                    "Exhibitor Not Found"

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


// UPDATE
const updateExhibitor =
async (req, res) => {

    try {

        const updateData = {

            name: req.body.name,

            stall: req.body.stall,

            hall: req.body.hall,

            exhibitorTypeId:
                req.body.exhibitorTypeId,

            description:
                req.body.description,

            status:
                req.body.status

        };

        // IF NEW IMAGE
        if (req.file) {

            updateData.image =
                req.file.location;

        }

        const data =
        await AddExhibitor.findByIdAndUpdate(

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
                "Exhibitor Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


// DELETE
const deleteExhibitor =
async (req, res) => {

    try {

        await AddExhibitor.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Exhibitor Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createExhibitor,

    getAllExhibitors,

    getSingleExhibitor,

    updateExhibitor,

    deleteExhibitor

};