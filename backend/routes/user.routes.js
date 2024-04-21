import express from "express";
import User from "../models/user.model.js";

const userRouter = express.Router();

userRouter.use(express.json());

userRouter.use(express.urlencoded({ extended: true }));

userRouter.post("/signup", async (req, res) => {
	try {
		const { fullName, username, password } = req.body;

		// Check if the username already exists in the database
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "Username already exists" });
		}

		const user = new User({
			fullName,
			username,
			password,
			pfp: `https://avatar.iran.liara.run/public/boy?username=${username}`,
		});

		// Save the user to the database
		await user.save();

		res.status(201).json("User created successfully");
	} catch (error) {
		console.error("Error creating user:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

userRouter.post("/login", async (req, res) => {
	try {
		const { username, password } = req.body;
		const user = await User.findOne({ username, password });

		if (!user) {
			return res
				.status(401)
				.json({ error: "Invalid username or password" });
		}

		res.cookie("username", username, { maxAge: 900000, httpOnly: true });

		res.status(200).json({ message: "Login successful", user });
	} catch (error) {
		console.error("Error during login:", error);
		res.status(500).json({ error: "Internal server error" });
	}
});

userRouter.get("/logout", (req, res) => {
	res.clearCookie("username").json({ message: "Logged out!" });
});

export default userRouter;
