import { firebaseAuth } from "@/firebase/firebase";
import * as SecureStore from "expo-secure-store";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type AuthContextType = {
  user: User | null;
  loading: boolean;
  onGoogleLogin: any;
  onFacebookLogin: any;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore session on app start
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      firebaseAuth,
      async (firebaseUser) => {
        setUser(firebaseUser);
        setLoading(false);

        if (firebaseUser) {
          await SecureStore.setItemAsync(
            "refreshToken",
            firebaseUser.refreshToken
          );
        }
      }
    );

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    const userCred = await signInWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    setUser(userCred.user);
    await SecureStore.setItemAsync("refreshToken", userCred.user.refreshToken);
  };

  const register = async (email: string, password: string) => {
    const userCred = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );
    setUser(userCred.user);
    await SecureStore.setItemAsync("refreshToken", userCred.user.refreshToken);
  };

  const logout = async () => {
    await signOut(firebaseAuth);
    setUser(null);
    await SecureStore.deleteItemAsync("refreshToken");
  };
  const onFacebookLogin = async () => {
    console.log("Facebook logging");
  };
  const onGoogleLogin = async () => {
    console.log("Google login");
  };
  const authSettings = useMemo(() => {
    return {
      user,
      loading,
      login,
      register,
      logout,
      onFacebookLogin,
      onGoogleLogin,
    };
  }, [loading, user]);
  return (
    <AuthContext.Provider value={authSettings}>{children}</AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
