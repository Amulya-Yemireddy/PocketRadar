import { registerUser, loginUser } from "../services/AuthService.js";
import ApiResponse from "../utils/ApiResponse.js";

export const register = async (req, res) => {
    const user = await registerUser(req.body);

    res.status(201).json(new ApiResponse(
      201,
      {
        id: user._id,
        fullName: user.fullName,
        email: user.email,
      },
      'User registered successfully'
    ));

};

export const login = async (req, res) => {
     console.log("🔥 Login request received");
    console.log(req.body);

    const { token, user } = await loginUser(req.body);

    res.status(200).json(new ApiResponse(
      200,
      {
        token,
        user: {
          id: user._id,
          fullName: user.fullName,
          email: user.email,
        },
      },
      "Login successful"
    ));
};