 const AddContact = require("../models/AddContactModel");



exports.createAddContact = async (req, res) => {

    try {

        const addcontact = await AddContact.create(req.body);

        res.status(201).json({
            success: true,
            message: "Add Contact Created Successfully",
            data: addcontact
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



exports.getAllAddContacts = async (req, res) => {

    try {

        const addcontacts = await AddContact.find();

        res.status(200).json({
            success: true,
            count: addcontacts.length,
            data: addcontacts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



exports.getSingleAddContact = async (req, res) => {

    try {

        const addcontact = await AddContact.findById(req.params.id);

        if (!addcontact) {

            return res.status(404).json({
                success: false,
                message: "Add Contact Not Found"
            });

        }

        res.status(200).json({
            success: true,
            data: addcontact
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};



exports.updateAddContact = async (req, res) => {

    try {

        const addcontact = await AddContact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (!addcontact) {

            return res.status(404).json({
                success: false,
                message: "Add Contact Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Add Contact Updated Successfully",
            data: addcontact
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};


exports.deleteAddContact = async (req, res) => {

    try {

        const addcontact = await AddContact.findByIdAndDelete(req.params.id);

        if (!addcontact) {

            return res.status(404).json({
                success: false,
                message: "Add Contact Not Found"
            });

        }

        res.status(200).json({
            success: true,
            message: "Add Contact Deleted Successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};