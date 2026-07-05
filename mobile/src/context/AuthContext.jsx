import { createContext, useContext, useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import * as authApi from "../services/authApi";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAuth();
  }, []);

const loadAuth = async () => {
  try {
    const savedToken = await SecureStore.getItemAsync("token");

    // No token = definitely not logged in.
    if (!savedToken) return;

    /*
      Ask the backend:
      "Is this token still valid?"

      We DO NOT trust SecureStore blindly.
    */
    const result = await authApi.getMe(savedToken);

    /*
      Backend says the token is valid.

      Save the fresh user returned by the server.
    */
    setToken(savedToken);
    setUser(result.data);

    /*
      Optional:
      Update SecureStore with the latest user.
      Useful if the user changes their name later.
    */
    await SecureStore.setItemAsync(
      "user",
      JSON.stringify(result.data)
    );

  } catch (error) {
    /*
      Something went wrong.

      Examples:
      - Token expired
      - User deleted
      - JWT invalid

      Clear everything and force a fresh login.
    */
    await SecureStore.deleteItemAsync("token");
    await SecureStore.deleteItemAsync("user");

    setToken(null);
    setUser(null);
  } finally {
    setLoading(false);
  }
};

  const login = async (token, user) => {
  await SecureStore.setItemAsync("token", token);
  await SecureStore.setItemAsync("user", JSON.stringify(user));

  setToken(token);
  setUser(user);
};

const logout = async () => {
  await SecureStore.deleteItemAsync("token");
  await SecureStore.deleteItemAsync("user");

  setToken(null);
  setUser(null);
};

  const value = {
    user,
    token,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);