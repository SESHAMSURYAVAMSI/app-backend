 const AddExhibitor =
require("../models/AddExhibitorModel");



exports.getAllExhibitors = async (req, res) => {

    try {

        const exhibitors =
        await AddExhibitor.find();

        res.status(200).json({
            success: true,
            data: exhibitors
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


exports.getSingleExhibitor =
async (req, res) => {

    try {

        const exhibitor =
        await AddExhibitor.findById(req.params.id);

        if (!exhibitor) {

            return res.status(404).json({
                success: false,
                message: "Exhibitor not found"
            });

        }

        res.status(200).json({
            success: true,
            data: exhibitor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.createExhibitor =
async (req, res) => {

    try {

        const exhibitor =
        await AddExhibitor.create(req.body);

        res.status(201).json({
            success: true,
            message: "Exhibitor created successfully",
            data: exhibitor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


exports.updateExhibitor =
async (req, res) => {

    try {

        const exhibitor =
        await AddExhibitor.findByIdAndUpdate(

            req.params.id,

            req.body,

            {
                new: true,
                runValidators: true
            }

        );

        if (!exhibitor) {

            return res.status(404).json({
                success: false,
                message: "Exhibitor not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Exhibitor updated successfully",
            data: exhibitor
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

exports.deleteExhibitor =
async (req, res) => {

    try {

        const exhibitor =
        await AddExhibitor.findByIdAndDelete(
            req.params.id
        );

        if (!exhibitor) {

            return res.status(404).json({
                success: false,
                message: "Exhibitor not found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Exhibitor deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};