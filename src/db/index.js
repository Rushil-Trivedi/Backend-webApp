import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URL}/ ${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO_DB connection Failed: ", error);

    //  nodeJs gives us access of "process" and we can use "process" anywhere because it's part of nodeJS. "process" means the reference of the current application which is run on any process. "exit()" is a method.
    process.exit(1);
  }
};

export default connectDB;
