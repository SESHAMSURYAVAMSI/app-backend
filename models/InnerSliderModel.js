 const mongoose = require("mongoose");

const InnerSliderSchema = new mongoose.Schema(

{
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
    "InnerSlider",
    InnerSliderSchema
);