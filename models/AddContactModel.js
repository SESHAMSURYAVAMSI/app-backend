const mongoose = require("mongoose");

const AddContactSchema =
new mongoose.Schema(
{
    title: {
        type: String,
        required: true,
        trim: true,
    },

    description: {
        type: String,
        default: "",
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
  "AddContact",
  AddContactSchema
);