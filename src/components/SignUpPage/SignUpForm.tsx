//@ts-nocheck

import { Input } from '@/components/Inputs/Input';
import { useFormContext } from 'react-hook-form';
import axiosClient from '@/api/config/axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { Button } from '@/components/Button';
import { AxiosError } from 'axios';

export const SignUpForm = () => {
  const { handleSubmit, setError } = useFormContext();

  const { getUser } = useContext(UserContext);

  const router = useRouter();

  const onSignInSubmit = async ({
    email,
    password,
    firstName,
    lastName,
  }: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) => {
    console.log(email);
    console.log(password);

    try {
      await axiosClient.post('/auth/sign-up', {
        email,
        password,
        firstName,
        lastName,
      });

      const { data } = await axiosClient.post('/auth/sign-in', {
        email,
        password,
      });

      localStorage.setItem('token', data.access_token);

      await getUser();

      router.push('/');
    } catch (err: AxiosError) {
      if (err.response.status === 403) {
        console.log(err.response);
        setError('email', {
          type: 'manual',
          message: err.response.data.error,
        });
      } else {
        console.log(err);
      }
    }
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
        <div className="grid grid-cols-2 space-x-4">
          <div>
            <Input
              name="firstName"
              type="text"
              autoComplete="firstName"
              required
              label="Ім'я"
            />
          </div>
          <div>
            <Input name="lastName" type="text" autoComplete="lastName" required label="Прізвище" />
          </div>
        </div>

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
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            label="Пароль"
          />
        </div>

        <div>
          <Input
            id="password"
            name="confirmPassword"
            type="password"
            required
            label="Підтвердіть пароль"
          />
        </div>

        <div>
          <Button
            type="submit"
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
           Зареєструватися
          </Button>
        </div>
      </form>
    </div>
  );
};
