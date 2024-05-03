import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
	try {
		const { username } = await req.cookies;

		const user = await User.findOne({ username: username });

		if (!user) {
			return res.status(500).json("Not logged in");
		}
		req.userID = user._id;

		next();
	} catch (error) {
		console.log("Error in protect route middleware:", error);
		res.status(500).json({ error: "Internal Server Error" });
	}
};

export default protectRoute;
