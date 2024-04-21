import express from "express";
import cookieParser from "cookie-parser";
import protectRoute from "./protect.routes.js";
import Story from "../models/story.model.js";
const storyRouter = express.Router();

storyRouter.use(express.json());

// Middleware to parse cookies
storyRouter.use(cookieParser());

storyRouter.use(express.urlencoded({ extended: true }));

storyRouter.get("/", async (req, res) => {
	res.status(200).json(
		await Story.find({}).populate({
			path: "author",
			select: "fullName",
		})
	);
});

storyRouter.post("/submit", protectRoute, async (req, res) => {
	try {
		const { title, content } = req.body;
		if (!title || !content) return res.status(400).send("Missing fields");

		const story = new Story({
			title,
			content,
			author: req.userID,
		});

		await story.save();

		res.status(200).json("Story submitted successfully!");
	} catch (error) {
		console.log("Error in submitting story:", error);
		res.status(500).json("Internal Server error");
	}
});

export default storyRouter;
