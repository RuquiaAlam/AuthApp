import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
//URI of MongoDb website
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDb");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.listen(3000, () => {
  console.log("Server listening to port 3000");
});