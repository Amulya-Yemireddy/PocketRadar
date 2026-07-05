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

export const getExpense = async (
  token,
  expenseId
) => {
  const response = await api.get(
    `/expenses/${expenseId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateExpense = async (
  token,
  expenseId,
  expense
) => {
  const response = await api.put(
    `/expenses/${expenseId}`,
    expense,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteExpense = async (
  token,
  id
) => {
  const response = await api.delete(
    `/expenses/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};