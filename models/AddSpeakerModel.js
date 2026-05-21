 const mongoose = require("mongoose");

const AddSpeakerSchema =
new mongoose.Schema(

{
    name: {
        type: String,
        required: true,
        trim: true,
    },

    designation: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true,
    },

    speaker: {
        type: String,
        required: true,
    },

    status: {
        type: String,

        enum: ["active", "inactive"],

        default: "active",
    },

},

{
    timestamps: true,
}

);

module.exports = mongoose.model(
    "AddSpeaker",
    AddSpeakerSchema
);