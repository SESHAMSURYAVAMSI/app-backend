const mongoose = require("mongoose");

const SessionAddSchema =
new mongoose.Schema(

{

    eventId: {

        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Event",

        required: true,

    },

    sessionDate: {

        type: String,

        required: true,

    },

    color: {

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
    "SessionAdd",
    SessionAddSchema
);