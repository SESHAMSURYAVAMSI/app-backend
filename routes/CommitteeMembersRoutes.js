const express = require("express");

const router = express.Router();

const multer = require("multer");

const multerS3 = require("multer-s3");

const { S3Client } =
require("@aws-sdk/client-s3");

require("dotenv").config();

const {

    createCommitteeMember,

    getCommitteeMembers,

    getSingleCommitteeMember,

    updateCommitteeMember,

    deleteCommitteeMember

} = require(
    "../controllers/CommitteeMembersController"
);

const s3 = new S3Client({

    region: process.env.AWS_REGION,

    credentials: {

        accessKeyId:
            process.env.AWS_ACCESS_KEY_ID,

        secretAccessKey:
            process.env.AWS_SECRET_ACCESS_KEY

    }

});

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
    "/:eventId/committee-members",
    upload.single("image"),
    createCommitteeMember
);


// GET ALL
router.get(
    "/:eventId/committee-members",
    getCommitteeMembers
);


// GET SINGLE
router.get(
    "/:eventId/committee-members/:id",
    getSingleCommitteeMember
);


// UPDATE
router.put(
    "/:eventId/committee-members/:id",
    upload.single("image"),
    updateCommitteeMember
);


// DELETE
router.delete(
    "/:eventId/committee-members/:id",
    deleteCommitteeMember
);

module.exports = router;