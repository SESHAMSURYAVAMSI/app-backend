 const mongoose = require("mongoose");

const EventInfoSchema = new mongoose.Schema(

{
    title: {
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
    "EventInfo",
    EventInfoSchema
);