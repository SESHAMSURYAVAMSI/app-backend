const AddMessage =
require("../models/AddMessageModel");


// GET ALL
exports.getAllMessages = async (req, res) => {

    try {

        const messages =
        await AddMessage.find();

        res.status(200).json({
            success: true,
            data: messages
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// GET SINGLE
exports.getSingleMessage =
async (req, res) => {

    try {

        const message =
        await AddMessage.findById(req.params.id);

        if (!message) {

            return res.status(404).json({
                success: false,
                message: "Message not found"
            });

        }

        res.status(200).json({
            success: true,
            data: message
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// CREATE
exports.createMessage =
async (req, res) => {

    try {

        const message =
        await AddMessage.create(req.body);

        res.status(201).json({
            success: true,
            message: "Message created successfully",
            data: message
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// UPDATE
exports.updateMessage =
async (req, res) => {

    try {

        const message =
        await AddMessage.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!message) {

            return res.status(404).json({
                success: false,
                message: "Message not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Message updated successfully",
            data: message
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


// DELETE
exports.deleteMessage =
async (req, res) => {

    try {

        const message =
        await AddMessage.findByIdAndDelete(
            req.params.id
        );

        if (!message) {

            return res.status(404).json({
                success: false,
                message: "Message not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Message deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};