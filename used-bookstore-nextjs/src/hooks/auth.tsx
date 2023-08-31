import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  ReactNode,
} from "react";
import { toast } from "react-toastify";
import { api } from "../utils/api";
import { useLocalStorage } from "./storage";
import "react-toastify/dist/ReactToastify.css";

interface AuthProviderProps {
  children: ReactNode;
}

interface SignInProps {
  login: string;
  password: string;
}

interface UseAuthProps {
  isLoading: boolean;
  signIn: ({ login, password }: SignInProps) => void;
  token: string;
  userData: string;
  signOut: () => void;
}

const AuthContext = createContext<UseAuthProps>({
  isLoading: false,
  signIn: () => {
    return { login: "", password: "" };
  },
  token: "",
  userData: "",
  signOut: () => {
    return;
  },
});

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken, removeToken] = useLocalStorage(
    "@used-bookstore/token",
    null
  );
  const [userData, setUserData, removeUserData] = useLocalStorage(
    "@used-bookstore/user",
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useCallback(
    async ({ login, password }: SignInProps) => {
      setIsLoading(true);

      try {
        const response = await api.post("/auth/token", { login, password });
        const { token: accessToken, userId } = response.data;

        setToken(accessToken);
        setUserData(userId);
      } catch (error) {
        toast.error("Invalid username or password");
        console.log(error);
      }
      setIsLoading(false);
    },
    [setToken, setUserData]
  );

  const signOut = useCallback(async () => {
    removeToken();
    removeUserData();
  }, [removeToken, removeUserData]);

  return (
    <AuthContext.Provider
      value={{ token, userData, signIn, signOut, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth requires use a context (AuthProvider)");
  }

  return context;
}

export { AuthProvider, useAuth };
