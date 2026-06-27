 const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv").config();

const app = express();




app.use(express.json());

// app.use(cors());
app.use(
  cors({
    origin:[ "http://localhost:3000",
    "https://aig-app-two.vercel.app",
],
    credentials: true,
  })
);



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
    "/api/events",
    SpeakerTypeRoutes
);





const SliderRoutes =
require("./routes/SliderRoutes");

app.use(
    "/api/events",
    SliderRoutes
);





const InnerSliderRoutes =
require("./routes/InnerSliderRoutes");

app.use(
    "/api/events",
    InnerSliderRoutes
);





const OuterSliderRoutes =
require("./routes/OuterSliderRoutes");

app.use(
    "/api/events",
    OuterSliderRoutes
);





const CommitteeTypeRoutes =
require("./routes/CommitteeTypeRoutes");

app.use(
    "/api/events",
    CommitteeTypeRoutes
);





const CommitteeMembersRoutes =
require("./routes/CommitteeMembersRoutes");

app.use(
    "/api/events",
    CommitteeMembersRoutes
);





const AddSpeakerRoutes =
require("./routes/AddSpeakerRoutes");

app.use(
    "/api/events",
    AddSpeakerRoutes
);





const AbstractsRoutes =
require("./routes/AbstractsRoutes");

app.use(
    "/api/events",
    AbstractsRoutes
);





const SessionAddRoutes =
require("./routes/SessionAddRoutes");

app.use(
    "/api/events",
    SessionAddRoutes
);





const SessionDetailsRoutes =
require("./routes/SessionDetailsRoutes");

app.use(
    "/api/events",
    SessionDetailsRoutes
);





const TrackRoutes =
require("./routes/TrackRoutes");

app.use(
    "/api/events",
    TrackRoutes
);





const AddDelegateRoutes =
require("./routes/AddDelegateRoutes");

app.use(
    "/api/events",
    AddDelegateRoutes
);





const UploadFileRoutes =
require("./routes/UploadFileRoutes");

app.use(
    "/api/events",
    UploadFileRoutes
);





const AddQuizRoutes =
require("./routes/AddQuizRoutes");

app.use(
    "/api/events",
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
    "/api/events",
    AddLinkRoutes
);





const AddExhibitorTypeRoutes =
require("./routes/AddExhibitorTypeRoutes");

app.use(
    "/api/events",
    AddExhibitorTypeRoutes
);




const exhibitorRoutes =
require("./routes/AddExhibitorRoutes");

app.use(
  "/api/events/:eventId/exhibitors",
  exhibitorRoutes
);





const messageRoutes =
require("./routes/AddMessageRoutes");

app.use(
    "/api/events",
    messageRoutes
);





const addContactRoutes =
require("./routes/AddContactRoutes");

app.use(
    "/api/events",
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





// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {

//     console.log(
//         `Server Running On Port ${PORT}`
//     );

// });

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB Connected...");

    app.listen(PORT, () => {
      console.log(`Server Running On Port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo Error:", err);
  });