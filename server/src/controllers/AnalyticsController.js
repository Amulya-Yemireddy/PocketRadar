import ApiResponse from "../utils/ApiResponse.js";

import { getCategoryAnalytics } from "../services/AnalyticsService.js";

export const fetchCategoryAnalytics = async (
  req,
  res
) => {

  const analytics =
    await getCategoryAnalytics(
      req.user._id
    );

  res.status(200).json(
    new ApiResponse(
      200,
      analytics,
      "Analytics loaded successfully"
    )
  );
};