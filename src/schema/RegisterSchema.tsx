import { InferType, object, ref, string } from 'yup';

export const RegisterSchema = object({
  email: string().email('Email not valid').required('Required'),
  password: string().required('Required').min(6, 'Minimum 6 Characters'),
  passwordConfirm: string()
    .required('Required')
    .min(6, 'Minimum 6 Characters')
    .oneOf([ref('password')], 'Passwords not match'),
});

export type RegisterType = InferType<typeof RegisterSchema>;
