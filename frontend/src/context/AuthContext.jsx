import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [user, setUser] = useState(null);

  // Load logged-in user when the app starts
  useEffect(() => {

    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }

  }, []);

  // Login
  function login(userData) {

    localStorage.setItem(
      "user",
      JSON.stringify(userData)
    );

    setUser(userData);

  }

  // Logout
  function logout() {

    localStorage.removeItem("user");

    setUser(null);

  }

  return (

    <AuthContext.Provider
      value={{
        user,
        login,
        logout
      }}
    >

      {children}

    </AuthContext.Provider>

  );

}