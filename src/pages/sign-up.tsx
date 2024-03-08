import { useForm } from 'react-hook-form';

import { FormProvider } from 'react-hook-form';

import { SignUpHeader } from '@/components/SignUpPage/SignUpHeader';
import { SignUpForm } from '@/components/SignUpPage/SignUpForm';
import { SignUpIsRegistered } from '@/components/SignUpPage/SignUpIsRegistered';

export default function SignUp() {
  const methods = useForm();

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
