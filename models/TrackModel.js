const mongoose = require("mongoose");

const TrackSchema = new mongoose.Schema(

{
    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },

    trackName: {
        type: String,
        required: true,
    },

    trackColor: {
        type: String,
        required: true,
    },

    sessionDateId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SessionAdd",
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
    "Track",
    TrackSchema
);