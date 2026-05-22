const mongoose = require("mongoose");

const CommitteeMembersSchema =
new mongoose.Schema(

{

    eventId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        required: true,
    },

    name: {
        type: String,
        required: true,
    },

    designation: {
        type: String,
        required: true,
    },

    committeeType: {
        type: String,
        required: true,
    },

    image: {
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
    "CommitteeMembers",
    CommitteeMembersSchema
);