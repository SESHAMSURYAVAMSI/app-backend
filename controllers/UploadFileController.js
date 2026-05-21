 const UploadFile =
require("../models/UploadFileModel");


// CREATE FILE

const createUploadFile =
async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "File is required"

            });

        }

        const data =
        await UploadFile.create({

            title: req.body.title,

            // AWS FILE URL

            fileUrl: req.file.location,

            status: req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "File Uploaded Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// GET ALL FILES

const getUploadFiles =
async (req, res) => {

    try {

        const data =
        await UploadFile.find();

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




// GET SINGLE FILE

const getSingleUploadFile =
async (req, res) => {

    try {

        const data =
        await UploadFile.findById(
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




// UPDATE FILE

const updateUploadFile =
async (req, res) => {

    try {

        const updateData = {

            title: req.body.title,

            status: req.body.status

        };

        // IF NEW FILE

        if (req.file) {

            updateData.fileUrl =
                req.file.location;

        }

        const data =
        await UploadFile.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );

        res.status(200).json({

            success: true,

            message:
                "File Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};




// DELETE FILE

const deleteUploadFile =
async (req, res) => {

    try {

        await UploadFile.findByIdAndDelete(
            req.params.id
        );

        res.status(200).json({

            success: true,

            message:
                "File Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};


module.exports = {

    createUploadFile,

    getUploadFiles,

    getSingleUploadFile,

    updateUploadFile,

    deleteUploadFile

};