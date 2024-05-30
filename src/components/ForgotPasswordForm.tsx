import { Input } from '@/components/Inputs/Input';
import { useFormContext } from 'react-hook-form';
import axiosClient from '@/api/config/axios';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { Button } from '@/components/Button';

export const ForgotPasswordForm = () => {
  const { handleSubmit } = useFormContext();

  const onSignInSubmit = async ({ email, password }: { email: string; password: string }) => {
    // setInvalidCredentialsError(false);
    // console.log(email);
    // console.log(password);
    //
    // try {
    //   const { data } = await axiosClient.post('/auth/sign-in', {
    //     email,
    //     password,
    //   });
    //
    //   localStorage.setItem('token', data.access_token);
    //
    //   await getUser();
    //
    //   router.push('/');
    // } catch (err) {
    //   setInvalidCredentialsError(true);
    // }
  };

  return (
    <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
      <form
        className="space-y-6"
        onSubmit={(event) => {
          event.preventDefault();

          handleSubmit(onSignInSubmit)();
        }}
      >
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            label="Електронна пошта"
          />
        </div>

        <div>
          <Button
            type="submit"
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Змінити
          </Button>
        </div>
      </form>
    </div>
  );
};
