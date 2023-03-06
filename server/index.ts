import mongoose from "mongoose";

export default async () => {
  try {
    await mongoose.connect("mongodb+srv://uug:JAice8BJgqXo6DN4@uugdemo.pmtwnlx.mongodb.net/?retryWrites=true&w=majority");
    console.log("DB connection established.");
  } catch (err) {
    console.error("DB connection failed.", err);
  }
};