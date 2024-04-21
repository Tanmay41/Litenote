import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
	fullName: {
		type: String,
		required: true,
	},
	username: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	pfp: {
		type: String,
	},
});

const User = mongoose.model("User", userSchema);

export default User;
