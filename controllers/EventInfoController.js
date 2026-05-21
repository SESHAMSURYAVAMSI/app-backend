const EventInfo =
require("../models/EventInfoData.js");


// CREATE EVENT

const createEvent = async (req, res) => {

    try {

        const data = await EventInfo.create({

            title: req.body.title,

            description: req.body.description,

            // AWS S3 IMAGE URL

            image: req.file.location,

            status: req.body.status,

        });

        res.status(201).json({

            success: true,

            message: "Event Created Successfully",

            data,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};




// GET ALL EVENTS

const getEvents = async (req, res) => {

    try {

        const data = await EventInfo.find();

        res.status(200).json({

            success: true,

            data,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};




// GET SINGLE EVENT

const getSingleEvent = async (req, res) => {

    try {

        const data =
        await EventInfo.findById(req.params.id);

        res.status(200).json({

            success: true,

            data,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};




// UPDATE EVENT

const updateEvent = async (req, res) => {

    try {

        const updateData = {

            title: req.body.title,

            description: req.body.description,

            status: req.body.status,

        };

        // IF NEW IMAGE

        if (req.file) {

            updateData.image =
                req.file.location;

        }

        const data =
        await EventInfo.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );

        res.status(200).json({

            success: true,

            message:
                "Event Updated Successfully",

            data,

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};




// DELETE EVENT

const deleteEvent = async (req, res) => {

    try {

        await EventInfo.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Event Deleted Successfully",

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message,

        });

    }

};


module.exports = {

    createEvent,

    getEvents,

    getSingleEvent,

    updateEvent,

    deleteEvent,

};