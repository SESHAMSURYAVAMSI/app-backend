 const mongoose = require("mongoose");

const AddContactSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    status: {
        type: String,
        enum: ["Active", "Inactive"],
        default: "Active"
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("addcontact", AddContactSchema);