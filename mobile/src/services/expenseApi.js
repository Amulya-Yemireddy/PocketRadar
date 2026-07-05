import api from "./api";

export const createExpense = async (
  token,
  expense
) => {
  const response = await api.post(
    "/expenses",
    expense,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getExpenses = async (token) => {
  const response = await api.get("/expenses", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};