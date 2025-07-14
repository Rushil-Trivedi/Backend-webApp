import express, { urlencoded } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.on("error", (error) => {
  console.log("Error: ", error);
  throw err;
});

// "use" method is used in configuration and middlewares.
app.use(
  cors({
    origin: process.env.CORS_OROGIN,
    credentials: true,
  })
);

// note**: Here these 3 "json, urlencoded, static" are major configurations.

app.use(express.json({ limit: "16kb" }));

// we can also use this method "app.use(urlencoded())" simply without defininig any property. but here we are defining some properties.
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// to store the imgs, pdf, faviscons etc we can use "static" method of expressJS and here we give static("public") because we want to store it in public folder.
app.use(express.static("public"));

app.use(cookieParser());

// routes import

import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

export { app };
