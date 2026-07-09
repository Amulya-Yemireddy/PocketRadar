import api from "./api";

export const getBudgetProgress = async (token) => {
  const response = await api.get("/budgets/progress", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const getBudgets = async (token) => {
  const response = await api.get("/budgets", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

export const createBudget = async (token, budget) => {
  const response = await api.post(
    "/budgets",
    budget,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const updateBudget = async (
  token,
  id,
  amount
) => {
  const response = await api.put(
    `/budgets/${id}`,
    { amount },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const deleteBudget = async (
  token,
  id
) => {
  const response = await api.delete(
    `/budgets/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

export const getBudget = async (token, id) => {
  const response = await api.get(
    `/budgets/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};

