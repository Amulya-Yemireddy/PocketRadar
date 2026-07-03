import ApiError from "../utils/ApiError.js";

const errorHandler = (err, req, res, next) => {
  // If it's not our ApiError, treat it as Internal Server Error
  if (!(err instanceof ApiError)) {
    console.error(err);

    return res.status(500).json({
      success: false,
      statusCode: 500,
      message: "Internal Server Error",
    });
  }

  return res.status(err.statusCode).json({
    success: false,
    statusCode: err.statusCode,
    message: err.message,
  });
};

export default errorHandler;