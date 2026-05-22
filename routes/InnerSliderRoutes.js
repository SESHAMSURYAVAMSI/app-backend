const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const InnerSlider =
require("../models/InnerSliderModel");

/**
 * AWS
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
 * CREATE
 */
router.post(
  "/:eventId/inner-sliders",

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
        await InnerSlider.create(
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
          "Failed to create inner slider",
      });
    }
  }
);

/**
 * GET
 */
router.get(
  "/:eventId/inner-sliders",

  async (req, res) => {
    try {
      const { eventId } =
        req.params;

      const data =
        await InnerSlider.find({
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
          "Failed to fetch inner sliders",
      });
    }
  }
);

/**
 * UPDATE
 */
router.put(
  "/:eventId/inner-sliders/:id",

  upload.single("image"),

  async (req, res) => {
    try {
      const { id } =
        req.params;

      const updateData = {
        status:
          req.body.status,
      };

      if (
        req.file?.location
      ) {
        updateData.image =
          req.file.location;
      }

      const updated =
        await InnerSlider.findByIdAndUpdate(
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
          "Failed to update inner slider",
      });
    }
  }
);

/**
 * DELETE
 */
router.delete(
  "/:eventId/inner-sliders/:id",

  async (req, res) => {
    try {
      const { id } =
        req.params;

      await InnerSlider.findByIdAndDelete(
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
          "Failed to delete inner slider",
      });
    }
  }
);

module.exports = router;