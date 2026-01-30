import { InferType, object, string } from 'yup';

export const LoginSchema = object({
  email: string().email().required('Email is required'),
  password: string().required('Password is required'),
});

export type LoginType = InferType<typeof LoginSchema>;
