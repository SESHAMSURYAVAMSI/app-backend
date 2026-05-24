const mongoose =
require("mongoose");

const SpeakerTypeSchema =
new mongoose.Schema(
  {
    speakerType: {
      type: String,

      required: true,

      trim: true,
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
  "SpeakerType",
  SpeakerTypeSchema
);