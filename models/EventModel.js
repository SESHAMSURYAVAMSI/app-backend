const mongoose = require("mongoose");

const EventSchema = new mongoose.Schema(

{
    eventName: {
        type: String,
        required: true,
    },

    venue: {
        type: String,
        required: true,
    },

    eventImage: {
        type: String,
        required: true,
    },

    startDate: {
        type: String,
        required: true,
    },

    endDate: {
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
    "Event",
    EventSchema
);