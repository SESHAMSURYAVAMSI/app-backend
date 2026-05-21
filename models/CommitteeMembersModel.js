 const mongoose = require("mongoose");

const CommitteeMembersSchema =
new mongoose.Schema(

{
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

        enum: ["active", "inactive"],

        default: "active",
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