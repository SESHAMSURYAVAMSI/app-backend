const mongoose = require("mongoose");

const SessionDetailsSchema =
new mongoose.Schema(

{

    eventId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Event",

        required: true,
    },

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
        default: "",
    },

    sessionDateId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "SessionAdd",

        required: true,
    },

    trackId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Track",

        required: true,
    },

    status: {
        type: String,

        enum: [
          "active",
          "inactive"
        ],

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