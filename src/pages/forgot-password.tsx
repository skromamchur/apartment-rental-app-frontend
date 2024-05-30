import { useForm } from 'react-hook-form';

import { FormProvider } from 'react-hook-form';
import {ForgotPasswordForm} from "@/components/ForgotPasswordForm";
import NextLink from "next/link";
import {APP_ROUTES} from "@/constants/routes/AppRoutes";

export default function Example() {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div className="w-screen h-screen bg-gray-50">
        <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Відновлення паролю
            </h2>
            <p className="mt-2 text-sm text-gray-600 text-center">
              Введіть свою електронну пошту, щоб отримати посилання для відновлення паролю.
            </p>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
            <ForgotPasswordForm />
            <p className="mt-10 text-center text-sm text-gray-500">
              <NextLink
                className="font-semibold leading-6 text-primary hover:text-primaryHover cursor-pointer"
                href={APP_ROUTES.SIGN_IN}
              >
                Повернутися назад 
              </NextLink>
            </p>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}