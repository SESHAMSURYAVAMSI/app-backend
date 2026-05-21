 const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const app = express();




app.use(express.json());

app.use(cors());



app.use(
    "/uploads",
    express.static("uploads")
);




mongoose
.connect(process.env.MONGO_URL)

.then(() => {

    console.log("MongoDB Connected...");

})

.catch((err) => {

    console.log(err);

});




const SpeakerTypeRoutes =
require("./routes/SpeakerTypeRoutes");

app.use(
    "/api/speakertype",
    SpeakerTypeRoutes
);





const SliderRoutes =
require("./routes/SliderRoutes");

app.use(
    "/api/sliders",
    SliderRoutes
);





const InnerSliderRoutes =
require("./routes/InnerSliderRoutes");

app.use(
    "/api/innersliders",
    InnerSliderRoutes
);





const OuterSliderRoutes =
require("./routes/OuterSliderRoutes");

app.use(
    "/api/outersliders",
    OuterSliderRoutes
);





const CommitteeTypeRoutes =
require("./routes/CommitteeTypeRoutes");

app.use(
    "/api/committeetype",
    CommitteeTypeRoutes
);





const CommitteeMembersRoutes =
require("./routes/CommitteeMembersRoutes");

app.use(
    "/api/committeemembers",
    CommitteeMembersRoutes
);





const AddSpeakerRoutes =
require("./routes/AddSpeakerRoutes");

app.use(
    "/api/addspeakers",
    AddSpeakerRoutes
);





const AbstractsRoutes =
require("./routes/AbstractsRoutes");

app.use(
    "/api/abstracts",
    AbstractsRoutes
);





const SessionAddRoutes =
require("./routes/SessionAddRoutes");

app.use(
    "/api/sessionadd",
    SessionAddRoutes
);





const SessionDetailsRoutes =
require("./routes/SessionDetailsRoutes");

app.use(
    "/api/sessiondetails",
    SessionDetailsRoutes
);





const TrackRoutes =
require("./routes/TrackRoutes");

app.use(
    "/api/tracks",
    TrackRoutes
);





const AddDelegateRoutes =
require("./routes/AddDelegateRoutes");

app.use(
    "/api/adddelegates",
    AddDelegateRoutes
);





const UploadFileRoutes =
require("./routes/UploadFileRoutes");

app.use(
    "/api/uploadfiles",
    UploadFileRoutes
);





const AddQuizRoutes =
require("./routes/AddQuizRoutes");

app.use(
    "/api/addquiz",
    AddQuizRoutes
);

const EventRoutes =
require("./routes/EventRoutes");

app.use(
    "/api/events",
    EventRoutes
);



const AddLinkRoutes =
require("./routes/AddLinkRoutes");

app.use(
    "/api/addlinks",
    AddLinkRoutes
);





const AddExhibitorTypeRoutes =
require("./routes/AddExhibitorTypeRoutes");

app.use(
    "/api/addexhibitortype",
    AddExhibitorTypeRoutes
);




const exhibitorRoutes =
require("./routes/AddExhibitorRoutes");

app.use(
    "/api/exhibitors",
    exhibitorRoutes
);





const messageRoutes =
require("./routes/AddMessageRoutes");

app.use(
    "/api/messages",
    messageRoutes
);





const addContactRoutes =
require("./routes/AddContactRoutes");

app.use(
    "/api/addcontact",
    addContactRoutes
);





const authRoutes =
require("./routes/AuthRoutes");

app.use(
    "/api/auth",
    authRoutes
);





const EventInfoRoutes =
require("./routes/EventInfoRoutes");

app.use(
    "/api/events",
    EventInfoRoutes
);





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server Running On Port ${PORT}`
    );

});