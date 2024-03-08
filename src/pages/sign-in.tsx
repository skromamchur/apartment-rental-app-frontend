import { Input } from '@/components/Inputs/Input';
import { useForm } from 'react-hook-form';

import { FormProvider } from 'react-hook-form';
import { SignInHeader } from '@/components/SignInPage/SignInHeader';
import { SignInForm } from '@/components/SignInPage/SignInForm';
import { SignInNotRegistered } from '@/components/SignInPage/SignInNotRegistered';

export default function Example() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="w-screen h-screen bg-gray-50">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <SignInHeader />

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <SignInForm />
            <SignInNotRegistered />
          </div>
        </div>
      </div>
    </FormProvider>
  );
}
