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
import { ProfileType } from '../interface/ProfileType';
import {
  getAllRegisteredUsers,
  getProfile,
  getUserByEmail,
} from '../utils/UsersUtils';
import Toast from 'react-native-toast-message';

// Create the context
export const AuthContext = createContext<AuthContextType>({
  isAlreadyLogin: false,
  user: undefined,
  login: (_: LoginType) => null,
  logout: () => {},
  register: (_: RegisterType) => null,
});

// Custom hook to easily consume the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ProfileType | null>(null);
  const [isAlreadyLogin, setAlreadyLogin] = useState(false);

  const login = async (loginData: LoginType) => {
    const userFromDb = await getUserByEmail(loginData.email);

    if (!userFromDb) {
      Toast.show({
        type: 'error',
        text1: 'User not found!',
      });
      return;
    }

    setAlreadyLogin(true);
    setUser(userFromDb);
    AsyncStorage.setItem(StorageKey.IS_ALREADY_LOGIN, 'true');
    AsyncStorage.setItem(StorageKey.PROFILE, JSON.stringify(userFromDb));
  };

  const logout = () => {
    AsyncStorage.setItem(StorageKey.IS_ALREADY_LOGIN, 'false');
    AsyncStorage.removeItem(StorageKey.PROFILE);
    setAlreadyLogin(false);
    Toast.show({
      type: 'success',
      text1: 'You have logged out!',
    });
  };

  const register = async (registerData: RegisterType) => {
    const userDb = await getUserByEmail(registerData.email);

    if (userDb) {
      Toast.show({
        type: 'error',
        text1: 'Email already registered!',
      });
      return;
    }

    const registeredUsers = await getAllRegisteredUsers();
    registeredUsers.push({
      email: registerData.email,
      name: registerData.name,
    });
    Toast.show({
      type: 'success',
      text1: 'Registration successful!',
    });
    AsyncStorage.setItem(
      StorageKey.REGISTERED_USERS,
      JSON.stringify(registeredUsers),
    );
  };

  useEffect(() => {
    getProfile().then(profile => {
      if (!profile) {
        return;
      }
      setUser(profile);
      setAlreadyLogin(true);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
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
