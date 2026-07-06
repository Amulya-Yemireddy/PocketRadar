import api from "./api";

export const getCategoryAnalytics = async (token) => {
  const response = await api.get(
    "/analytics/categories",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};