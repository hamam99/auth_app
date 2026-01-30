import { LoginType } from '../schema/LoginSchema';
import { RegisterType } from '../schema/RegisterSchema';
import { ProfileType } from './ProfileType';

export type AuthContextType = {
  isAlreadyLogin: boolean;
  user: ProfileType | undefined | null;
  login: (param: LoginType) => void;
  logout: () => void;
  register: (user: RegisterType) => void;
};
