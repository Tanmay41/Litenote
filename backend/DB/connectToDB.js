import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONOGO_DB_URI);
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("error connecting to DB: ", error.message);
	}
};

export default connectToMongoDB;
