import { StyleSheet, Text, View } from "react-native";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextInterface {
  isAuth: boolean;

  // login will be given a token and handle a promise
  login: (token: string) => Promise<void>;

  // logout should now prepare for a promise
  logout: () => Promise<void>;

  //establish user
  user: string;
}

const AuthContext = createContext<AuthContextInterface>({
  isAuth: false,
  login: async (token: string) => {},
  logout: async () => {},
  user: "user",
});

// create useContext hook to make
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false);

  const [user, setUser] = useState("user");

  useEffect(() => {
    const loadToken = async () => {
      try {
        const token = await SecureStore.getItemAsync(user);

        // if the token is provided
        if (token) {
          setIsAuth(true);
        }
      } catch (e) {
        console.log("AuthProvider LoadToken: ", e);
      }
    };
    loadToken();
  }, []);

  const login = async (token: string) => {
    // update user's value
    await SecureStore.setItemAsync(user, token);
    // set isAuth to true
    setIsAuth(true);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync(user);
    setIsAuth(false);
  }

  return (
    <AuthContext.Provider value={{ isAuth, login, logout, user }}>
      {children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

const styles = StyleSheet.create({});
