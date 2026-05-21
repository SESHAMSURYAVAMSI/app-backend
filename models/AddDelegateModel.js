 const mongoose = require("mongoose");

const AddDelegateSchema = new mongoose.Schema(

{
    name: {
        type: String,
        required: true,
        trim: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
    },

    designation: {
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
    "AddDelegate",
    AddDelegateSchema
);