 const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const {

    createAddSpeaker,

    getAddSpeakers,

    getSingleAddSpeaker,

    updateAddSpeaker,

    deleteAddSpeaker

} = require(
    "../controllers/AddSpeakerController"
);


// AWS CONFIG

const s3 = new S3Client({

    region: process.env.AWS_REGION,

    credentials: {

        accessKeyId:
            process.env.AWS_ACCESS_KEY_ID,

        secretAccessKey:
            process.env.AWS_SECRET_ACCESS_KEY

    }

});


// MULTER S3

const upload = multer({

    storage: multerS3({

        s3: s3,

        bucket:
            process.env.AWS_BUCKET_NAME,

        contentType:
            multerS3.AUTO_CONTENT_TYPE,

        key: function (req, file, cb) {

            cb(
                null,
                Date.now() +
                "-" +
                file.originalname
            );

        }

    })

});


// CREATE

router.post(

    "/",

    upload.single("image"),

    createAddSpeaker

);


// GET ALL

router.get("/", getAddSpeakers);


// GET SINGLE

router.get("/:id", getSingleAddSpeaker);


// UPDATE

router.put(

    "/:id",

    upload.single("image"),

    updateAddSpeaker

);


// DELETE

router.delete(
    "/:id",
    deleteAddSpeaker
);


module.exports = router;