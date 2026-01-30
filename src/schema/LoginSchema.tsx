import { InferType, object, string } from 'yup';

export const LoginSchema = object({
  email: string().email().required('Required'),
  password: string().required('Required'),
});

export type LoginType = InferType<typeof LoginSchema>;
