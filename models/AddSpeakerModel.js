const mongoose =
require("mongoose");

const AddSpeakerSchema =
new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    designation: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },

    /**
     * Speaker Type Relation
     */
    speakerTypeId: {
      type:
        mongoose.Schema.Types
          .ObjectId,

      ref: "SpeakerType",

      required: true,
    },

    /**
     * Event Relation
     */
    eventId: {
      type:
        mongoose.Schema.Types
          .ObjectId,

      ref: "Event",

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
  },

  {
    timestamps: true,
  }
);

module.exports =
mongoose.model(
  "AddSpeaker",
  AddSpeakerSchema
);