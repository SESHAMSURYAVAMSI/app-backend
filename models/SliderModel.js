const mongoose =
require("mongoose");

const SliderSchema =
new mongoose.Schema(
  {
    image: {
      type: String,

      required: true,
    },

    status: {
      type: String,

      enum: [
        "active",
        "inactive",
      ],

      default: "active",
    },

    /**
     * Linked Event
     */
    eventId: {
      type:
        mongoose.Schema.Types
          .ObjectId,

      ref: "Event",

      required: true,
    },
  },

  {
    timestamps: true,
  }
);

module.exports =
mongoose.model(
  "Slider",
  SliderSchema
);