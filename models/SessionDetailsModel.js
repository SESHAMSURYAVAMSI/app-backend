 const mongoose = require("mongoose");

const SessionDetailsSchema =
new mongoose.Schema(

{
    title: {
        type: String,
        required: true,
    },

    hall: {
        type: String,
        required: true,
    },

    date: {
        type: String,
        required: true,
    },

    startTime: {
        type: String,
        required: true,
    },

    endTime: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },

    session: {
        type: String,
        required: true,
    },

    track: {
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
    "SessionDetails",
    SessionDetailsSchema
);