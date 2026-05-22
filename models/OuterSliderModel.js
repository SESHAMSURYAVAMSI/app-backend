const mongoose =
require("mongoose");

const OuterSliderSchema =
new mongoose.Schema(
  {
    image: {
      type: String,

      required: true,
    },

    eventName: {
      type: String,

      required: true,
    },

    location: {
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
  "OuterSlider",
  OuterSliderSchema
);