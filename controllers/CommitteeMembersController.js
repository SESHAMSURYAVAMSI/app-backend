const CommitteeMembers =
require("../models/CommitteeMembersModel");



// CREATE COMMITTEE MEMBER
const createCommitteeMember =
async (req, res) => {

    try {

        if (!req.file) {

            return res.status(400).json({

                success: false,

                message: "Image is required"

            });

        }

        const { eventId } =
        req.params;

        const data =
        await CommitteeMembers.create({

            eventId,

            name: req.body.name,

            designation:
                req.body.designation,

            committeeType:
                req.body.committeeType,

            image:
                req.file.location,

            status:
                req.body.status

        });

        res.status(201).json({

            success: true,

            message:
                "Committee Member Added Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






// GET ALL COMMITTEE MEMBERS
const getCommitteeMembers =
async (req, res) => {

    try {

        const { eventId } =
        req.params;

        const data =
        await CommitteeMembers.find({

            eventId

        }).sort({

            createdAt: -1

        });

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






// GET SINGLE COMMITTEE MEMBER
const getSingleCommitteeMember =
async (req, res) => {

    try {

        const data =
        await CommitteeMembers.findById(
            req.params.id
        );

        if (!data) {

            return res.status(404).json({

                success: false,

                message:
                    "Committee Member Not Found"

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






// UPDATE COMMITTEE MEMBER
const updateCommitteeMember =
async (req, res) => {

    try {

        const updateData = {

            name: req.body.name,

            designation:
                req.body.designation,

            committeeType:
                req.body.committeeType,

            status:
                req.body.status

        };



        if (req.file) {

            updateData.image =
                req.file.location;

        }



        const data =
        await CommitteeMembers.findByIdAndUpdate(

            req.params.id,

            updateData,

            { new: true }

        );



        if (!data) {

            return res.status(404).json({

                success: false,

                message:
                    "Committee Member Not Found"

            });

        }



        res.status(200).json({

            success: true,

            message:
                "Committee Member Updated Successfully",

            data

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};






// DELETE COMMITTEE MEMBER
const deleteCommitteeMember =
async (req, res) => {

    try {

        const data =
        await CommitteeMembers.findByIdAndDelete(
            req.params.id
        );



        if (!data) {

            return res.status(404).json({

                success: false,

                message:
                    "Committee Member Not Found"

            });

        }



        res.status(200).json({

            success: true,

            message:
                "Committee Member Deleted Successfully"

        });

    } catch (error) {

        res.status(500).json({

            success: false,

            message: error.message

        });

    }

};



module.exports = {

    createCommitteeMember,

    getCommitteeMembers,

    getSingleCommitteeMember,

    updateCommitteeMember,

    deleteCommitteeMember

};