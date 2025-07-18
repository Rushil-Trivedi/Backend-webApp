import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });

/*
1st Approach: this a good approach as we have used modules, used IIFE, try catch but the index file has got polluted, so it is not the better approach.

import mongoose from "mongoose";
import { DB_NAME } from "./constants";
import express from "express";

const app = express()
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/ ${DB_NAME}`);
    app.on("error", (error) => {
      console.log("Error: ", error);
      throw err;
    });

    app.listen(process.env.PORT, () => {
      console.log(`app is running on ${process.env.PORT} `);
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw err;
  }
});
*/
