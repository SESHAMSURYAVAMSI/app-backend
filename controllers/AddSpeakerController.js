 const AddSpeaker =
require("../models/AddSpeakerModel");


// CREATE SPEAKER

const createAddSpeaker =
async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image is required"

            });

        }

        const data =
        await AddSpeaker.create({

            name: req.body.name,

            designation:
                req.body.designation,

            description:
                req.body.description,

            speaker:
                req.body.speaker,

            // AWS IMAGE URL

            image: req.file.location,

            status:
                req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Speaker Added Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// GET ALL SPEAKERS

const getAddSpeakers =
async (req, res) => {

    try {

        const data =
        await AddSpeaker.find();

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




// GET SINGLE SPEAKER

const getSingleAddSpeaker =
async (req, res) => {

    try {

        const data =
        await AddSpeaker.findById(
            req.params.id
        );

        if (!data) {

            return res.status(404).json({

                success: false,

                message:
                    "Speaker Not Found"

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




// UPDATE SPEAKER

const updateAddSpeaker =
async (req, res) => {

    try {

        const updateData = {

            name: req.body.name,

            designation:
                req.body.designation,

            description:
                req.body.description,

            speaker:
                req.body.speaker,

            status:
                req.body.status

        };

        // IF NEW IMAGE

        if (req.file) {

            updateData.image =
                req.file.location;

        }

        const data =
        await AddSpeaker.findByIdAndUpdate(

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
                "Speaker Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// DELETE SPEAKER

const deleteAddSpeaker =
async (req, res) => {

    try {

        await AddSpeaker.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Speaker Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createAddSpeaker,

    getAddSpeakers,

    getSingleAddSpeaker,

    updateAddSpeaker,

    deleteAddSpeaker

};