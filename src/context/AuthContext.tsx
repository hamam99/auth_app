import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { LoginType } from '../schema/LoginSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageKey from '../contants/StorageKey';
import { AuthContextType } from '../interface/AuthContextType';
import { RegisterType } from '../schema/RegisterSchema';

// Create the context
export const AuthContext = createContext<AuthContextType>({
  isLoading: false,
  isAlreadyLogin: false,
  profile: undefined,
  login: (_: LoginType) => null,
  logout: () => {},
  register: (_: RegisterType) => null,
});

// Custom hook to easily consume the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isAlreadyLogin, setAlreadyLogin] = useState(false);

  // Example functions for login and logout (these would call your API)
  const login = (user: LoginType) => {};
  const logout = () => {
    AsyncStorage.setItem(StorageKey.IS_ALREADY_LOGIN, 'false');
    AsyncStorage.removeItem(StorageKey.PROFILE);
    setAlreadyLogin(false);
  };
  const register = (user: RegisterType) => {};

  // Check for user in localStorage on initial load
  useEffect(() => {
    // setLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        profile,
        isLoading,
        login,
        logout,
        register,
        isAlreadyLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
