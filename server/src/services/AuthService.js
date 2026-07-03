import bcrypt from "bcrypt";
import User from "../models/User.js";
import { generateToken } from "../utils/jwt.js";
import ApiError from "../utils/ApiError.js";

export const registerUser = async ({ fullName, email, password }) => {
  // Check if user already exists
  const normalizedEmail = email.toLowerCase();
  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    throw new ApiError(409,"User already exists");
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = await User.create({
    fullName,
    email: normalizedEmail,
    password: hashedPassword,
  });

  const token = generateToken(user._id);

return {
  token,
  user,
};
};

export const loginUser = async ({ email, password }) => {
  // Find the user
  const user = await User.findOne({
    email: email.toLowerCase(),
  });

  // Don't reveal whether the email or password was wrong
  if (!user) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Compare passwords
  const isMatch = await bcrypt.compare(
    password,
    user.password
  );

  if (!isMatch) {
    throw new ApiError(401, "Invalid email or password");
  }

  // Generate JWT
  const token = generateToken(user._id);

  return {
    token,
    user,
  };
};