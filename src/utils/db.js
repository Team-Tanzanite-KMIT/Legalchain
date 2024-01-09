import { createSpecificUserModel } from "@/models/User";
import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connections[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const specificUserModel=createSpecificUserModel(role);
    console.log("Mongo Connection successfully established.");
  } catch (error) {
    console.error("Error connecting to Mongo Instance");
  }
};

export default connect;
