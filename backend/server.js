import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectToMongoDB from "./DB/connectToDB.js";
import userRouter from "./routes/user.routes.js";
import storyRouter from "./routes/story.routes.js";

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cookieParser());

// Connect to MongoDB
connectToMongoDB();

// enable cors
app.use(
	cors({
		origin: "http://localhost:1234",
		credentials: true,
	})
);

// Mount userRouter and storyRouter directly onto the app instance
app.use("/api/user", userRouter);
app.use("/api/story", storyRouter);

app.listen(3001, () => {
	console.log("Server is running on http://localhost:3001");
});
