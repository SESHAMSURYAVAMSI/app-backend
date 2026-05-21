 const mongoose = require("mongoose");

const AddMessageSchema = new mongoose.Schema(

    {

        title: {
            type: String,
            required: true
        },

        message: {
            type: String,
            required: true
        },

        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active"
        }

    },

    {
        timestamps: true
    }

);

module.exports = mongoose.model(
    "AddMessage",
    AddMessageSchema
);