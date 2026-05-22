const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } = require("@aws-sdk/client-s3");

const EventInfo = require("../models/EventInfoModel");

/**
 * AWS S3
 */
const s3 = new S3Client({
  region: process.env.AWS_REGION,

  credentials: {
    accessKeyId:
      process.env.AWS_ACCESS_KEY_ID,

    secretAccessKey:
      process.env
        .AWS_SECRET_ACCESS_KEY,
  },
});

/**
 * Upload
 */
const upload = multer({
  storage: multerS3({
    s3,

    bucket:
      process.env
        .AWS_BUCKET_NAME,

    contentType:
      multerS3.AUTO_CONTENT_TYPE,

    key: function (
      req,
      file,
      cb
    ) {
      cb(
        null,
        Date.now() +
          "-" +
          file.originalname
      );
    },
  }),
});

/**
 * CREATE EVENT INFO
 */
router.post(
  "/:eventId/event-info",

  upload.single("image"),

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const payload = {
        title: req.body.title,

        description:
          req.body.description,

        status:
          req.body.status,

        eventId,

        image:
          req.file?.location ||
          "",
      };

      const created =
        await EventInfo.create(
          payload
        );

      res.status(201).json({
        success: true,

        data: created,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to create event info",
      });
    }
  }
);

/**
 * GET EVENT INFO
 */
router.get(
  "/:eventId/event-info",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const data =
        await EventInfo.find({
          eventId,
        });

      res.status(200).json({
        success: true,

        data,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to fetch event info",
      });
    }
  }
);

/**
 * UPDATE EVENT INFO
 */
router.put(
  "/:eventId/event-info/:id",

  upload.single("image"),

  async (req, res) => {
    try {
      const { id } =
        req.params;

      const updateData = {
        title: req.body.title,

        description:
          req.body.description,

        status:
          req.body.status,
      };

      /**
       * Update Image
       */
      if (req.file?.location) {
        updateData.image =
          req.file.location;
      }

      const updated =
        await EventInfo.findByIdAndUpdate(
          id,

          updateData,

          {
            new: true,
          }
        );

      res.status(200).json({
        success: true,

        data: updated,
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to update event info",
      });
    }
  }
);

/**
 * DELETE EVENT INFO
 */
router.delete(
  "/:eventId/event-info/:id",

  async (req, res) => {
    try {
      const { id } =
        req.params;

      await EventInfo.findByIdAndDelete(
        id
      );

      res.status(200).json({
        success: true,

        message:
          "Deleted successfully",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to delete",
      });
    }
  }
);

module.exports = router;