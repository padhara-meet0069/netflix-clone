import jwt from "jsonwebtoken";
import { ENV_VAARS } from "../config/envVars.js";

export const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, ENV_VAARS.JWT_SECRET, { expiresIn: "15d" });

	res.cookie("jwt-netflix", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, 
		httpOnly: true, 
		sameSite: "strict",
		secure: ENV_VAARS.NODE_ENV !== "development",
	});

	return token;
};