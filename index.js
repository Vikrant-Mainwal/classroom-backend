import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Routes from "./routes/route.js";
// const bodyParser = require("body-parser")
const app = express();
// const Routes = require("./routes/route.js")

const PORT = 5000;

dotenv.config();

// app.use(bodyParser.json({ limit: '10mb', extended: true }))
// app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))

app.use(express.json({ limit: "10mb" }));
app.use(cors());

const URL = process.env.MONGO_URL;
// console.log("const ",URL)

mongoose
  .connect(URL)
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log("NOT CONNECTED TO NETWORK", err));

app.get("/", (req, res) => {
  res.send({ message: "Classroom server is running!!" });
});
app.use("/", Routes);

app.listen(PORT, () => {
  console.log(`Server started at port no. ${PORT}`);
});
