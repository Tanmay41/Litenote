import mongoose from "mongoose";

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
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "User",
	},
	category: {
		type: String,
		required: true,
	},
	featured: {
		type: Boolean,
		default: false,
	},
});

const Story = mongoose.model("Story", storySchema);

export default Story;
