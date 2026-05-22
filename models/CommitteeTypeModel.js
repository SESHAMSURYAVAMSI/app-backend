const mongoose = require("mongoose");

const CommitteeTypeSchema =
new mongoose.Schema(

{
    eventId: {
        type:
          mongoose.Schema.Types.ObjectId,

        ref: "Event",

        required: true,
    },

    committeeType: {
        type: String,
        required: true,
    },

    status: {
        type: String,

        enum: ["Active", "Inactive"],

        default: "Active",
    },
},

{
    timestamps: true,
}

);

module.exports = mongoose.model(
    "CommitteeType",
    CommitteeTypeSchema
);