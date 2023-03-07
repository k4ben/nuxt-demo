import mongoose from "mongoose";

const DEFAULT_URI =
	"mongodb+srv://uug:JAice8BJgqXo6DN4@uugdemo.pmtwnlx.mongodb.net/?retryWrites=true&w=majority";
export default async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI ?? DEFAULT_URI);
		console.log("DB connection established.");
	} catch (err) {
		console.error("DB connection failed.", err);
	}
};
