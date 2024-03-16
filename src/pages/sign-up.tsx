import { useForm } from 'react-hook-form';

import { FormProvider } from 'react-hook-form';

import { SignUpHeader } from '@/components/SignUpPage/SignUpHeader';
import { SignUpForm } from '@/components/SignUpPage/SignUpForm';
import { SignUpIsRegistered } from '@/components/SignUpPage/SignUpIsRegistered';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required')
    .min(8, 'Confirm password must be at least 8 characters'),
});

export default function SignUp() {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <FormProvider {...methods}>
      <div className="w-screen h-screen bg-gray-50">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <SignUpHeader />

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <SignUpForm />
            <SignUpIsRegistered />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
