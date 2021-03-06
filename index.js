const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const bookRouter = require("./routes/bookRouter");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// set up routes
app.use("/users", userRouter);
app.use("/book", bookRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`The server has started on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send({
    text: "Welcome in Booking-App-Back",
  });
});

// set up mongoose

mongoose.connect(
  process.env.DB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  (err) => {
    if (err) throw err;
    console.log("MongoDB connection established");
  }
);
