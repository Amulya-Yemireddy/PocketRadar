import { useEffect, useState } from "react";

import { useAuth } from "../../../context/AuthContext";

import * as analyticsApi from "../../../services/analyticsApi";

export default function useAnalytics() {
  const { token } = useAuth();

  const [analytics, setAnalytics] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = async () => {
    try {
      const result =
        await analyticsApi.getCategoryAnalytics(
          token
        );

      const colors = [
        "#2563EB",
        "#16A34A",
        "#F97316",
        "#DC2626",
        "#9333EA",
        "#0891B2",
        ];

        const chartData = result.data.map(
        (item, index) => ({
            value: item.total,
            text: item.category,
            color:
            colors[index % colors.length],
        })
        );

        setAnalytics(chartData);

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
    analytics,
    loading,
    refresh: loadAnalytics,
  };
}