<<<<<<< HEAD
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const studentModel = require("./models/employe");
const adviceModel = require("./models/createnote");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/notes");
//authenticate and login
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  studentModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("the password is incorrect");
      }
    } else {
      res.json("no record existed");
    }
  });
});
//create account
app.post("/register", (req, res) => {
  studentModel
    .create(req.body)
    .then((students) => res.json(students))
    .catch((err) => res.json(err));
});

//advice notes create
app.post("/writeadvice", (req, res) => {
  adviceModel
    .create(req.body)
    .then((advices) => res.json(advices))
    .catch((err) => res.json(err));
});

// Endpoint to search advice by program
app.get("/api/advice", async (req, res) => {
  const { program } = req.query; // Get the program from query parameters
  try {
    const advice = await adviceModel.find({ program }); // Search for advice by program
    if (advice.length > 0) {
      res.status(200).json(advice); // Return matching advice
    } else {
      res.status(404).json({ message: "No advice found for this program" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error fetching advice", error: err });
  }
});

// Start the server

app.listen(3001, () => {
  console.log("server is running");
});
=======
import { registerRootComponent } from 'expo';

import App from './App';

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);
>>>>>>> e3472ebd540b93708abbc940b298d827f2e3016e
