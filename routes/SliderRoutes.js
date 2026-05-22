const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const Slider =
require("../models/SliderModel");

/**
 * AWS S3
 */
const s3 = new S3Client({
  region: process.env.AWS_REGION,

  credentials: {
    accessKeyId:
      process.env
        .AWS_ACCESS_KEY_ID,

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
 * CREATE SLIDER
 */
router.post(
  "/:eventId/sliders",

  upload.single("image"),

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const payload = {
        image:
          req.file?.location ||
          "",

        status:
          req.body.status ||
          "active",

        eventId,
      };

      const created =
        await Slider.create(
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
          "Failed to create slider",
      });
    }
  }
);

/**
 * GET SLIDERS
 */
router.get(
  "/:eventId/sliders",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const data =
        await Slider.find({
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
          "Failed to fetch sliders",
      });
    }
  }
);

/**
 * DELETE SLIDER
 */
router.delete(
  "/:eventId/sliders/:id",

  async (req, res) => {
    try {
      const { id } =
        req.params;

      await Slider.findByIdAndDelete(
        id
      );

      res.status(200).json({
        success: true,

        message:
          "Slider deleted",
      });
    } catch (error) {
      console.error(error);

      res.status(500).json({
        success: false,

        message:
          "Failed to delete slider",
      });
    }
  }
);

module.exports = router;