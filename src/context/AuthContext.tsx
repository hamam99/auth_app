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
  profile: undefined,
  login: (_: LoginType) => null,
  logout: () => {},
  register: (_: RegisterType) => null,
});

// Custom hook to easily consume the context
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<ProfileType | null>(null);
  const [isAlreadyLogin, setAlreadyLogin] = useState(false);

  const login = async (user: LoginType) => {
    const userFromDb = await getUserByEmail(user.email);

    if (!userFromDb) {
      Toast.show({
        type: 'error',
        text1: 'User not found!',
      });
      return;
    }

    setAlreadyLogin(true);
    setProfile(userFromDb);
    AsyncStorage.setItem(StorageKey.IS_ALREADY_LOGIN, 'true');
    AsyncStorage.setItem(StorageKey.PROFILE, JSON.stringify(user));
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

  const register = async (user: RegisterType) => {
    const userDb = await getUserByEmail(user.email);

    if (userDb) {
      Toast.show({
        type: 'error',
        text1: 'Email already registered!',
      });
      return;
    }

    const registeredUsers = await getAllRegisteredUsers();
    registeredUsers.push(user);
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
    getProfile().then(user => {
      if (!user) {
        return;
      }
      setProfile(user);
      setAlreadyLogin(true);
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        profile,
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
