import { LoginType } from '../schema/LoginSchema';
import { RegisterType } from '../schema/RegisterSchema';
import { ProfileType } from './ProfileType';

export type AuthContextType = {
  isLoading: boolean;
  isAlreadyLogin: boolean;
  profile: ProfileType | undefined | null;
  login: (param: LoginType) => void;
  logout: () => void;
  register: (user: RegisterType) => void;
};
