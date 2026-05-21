const Event =
require("../models/EventModel");


// CREATE EVENT

const createEvent = async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Event image is required"

            });

        }

        const data = await Event.create({

            eventName: req.body.eventName,

            venue: req.body.venue,

            // AWS IMAGE URL

            eventImage: req.file.location,

            startDate: req.body.startDate,

            endDate: req.body.endDate,

            status: req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Event Created Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// GET ALL EVENTS

const getEvents = async (req, res) => {

    try {

        const data = await Event.find();

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




// GET SINGLE EVENT

const getSingleEvent =
async (req, res) => {

    try {

        const data =
        await Event.findById(
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




// UPDATE EVENT

const updateEvent =
async (req, res) => {

    try {

        const updateData = {

            eventName: req.body.eventName,

            venue: req.body.venue,

            startDate: req.body.startDate,

            endDate: req.body.endDate,

            status: req.body.status

        };

        // IF NEW IMAGE

        if (req.file) {

            updateData.eventImage =
                req.file.location;

        }

        const data =
        await Event.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );

        res.status(200).json({

            success: true,

            message:
                "Event Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// DELETE EVENT

const deleteEvent =
async (req, res) => {

    try {

        await Event.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "Event Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createEvent,

    getEvents,

    getSingleEvent,

    updateEvent,

    deleteEvent

};