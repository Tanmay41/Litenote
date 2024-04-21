import mongoose from "mongoose";
import User from "./user.model.js";

const storySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		unique: true,
		required: true,
	},
	author: {
		type: String,
		required: true,
		ref: User,
	},
});

const Story = mongoose.model("Story", storySchema);

export default Story;
