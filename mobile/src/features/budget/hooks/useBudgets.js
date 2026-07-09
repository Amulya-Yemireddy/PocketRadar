import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";

import * as budgetApi from "../../../services/budgetApi";

export default function useBudgets() {

  const { token } = useAuth();

  const [budgets, setBudgets] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  if (token) {
    loadBudgets();
  }
}, [token]);

  const loadBudgets = async () => {
    try {

      const result =
        await budgetApi.getBudgetProgress(
          token
        );

      setBudgets(result.data);

    } catch (error) {

      console.log(
        error.response?.data ||
        error.message
      );

    } finally {

      setLoading(false);

    }
  };

  return {
    budgets,
    loading,
    refresh: loadBudgets,
  };
}