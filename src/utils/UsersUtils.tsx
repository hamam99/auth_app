import AsyncStorage from '@react-native-async-storage/async-storage';
import StorageKey from '../contants/StorageKey';
import { ProfileType } from '../interface/ProfileType';

export const getAllRegisteredUsers = async (): Promise<ProfileType[]> => {
  try {
    const usersString = await AsyncStorage.getItem(StorageKey.REGISTERED_USERS);
    if (usersString) {
      const usersList = JSON.parse(usersString);
      return usersList;
    }

    return [];
  } catch {
    return [];
  }
};

export const getUserByEmail = async (
  email: string,
): Promise<ProfileType | null> => {
  const users = await getAllRegisteredUsers();
  const user = users.find(item => item.email === email);

  if (user) {
    return user;
  }

  return null;
};

export const getProfile = async (): Promise<ProfileType | null> => {
  const profileString = await AsyncStorage.getItem(StorageKey.PROFILE);
  if (!profileString) {
    return null;
  }

  const profile = JSON.parse(profileString);
  if (!profile) {
    return null;
  }

  return profile;
};
