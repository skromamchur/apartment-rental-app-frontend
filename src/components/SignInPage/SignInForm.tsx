import { Input } from '@/components/Inputs/Input';
import { useFormContext } from 'react-hook-form';
import axiosClient from '@/api/config/axios';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { UserContext } from '@/contexts/UserContext';
import { Button } from '@/components/Button';

export const SignInForm = () => {
  const { handleSubmit } = useFormContext();

  const { getUser } = useContext(UserContext);

  const router = useRouter();

  const onSignInSubmit = async ({ email, password }: { email: string; password: string }) => {
    console.log(email);
    console.log(password);

    try {
      const { data } = await axiosClient.post('/auth/sign-in', {
        email,
        password,
      });

      localStorage.setItem('token', data.access_token);

      await getUser();

      router.push('/');
    } catch (err) {
      console.log(err);
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
        <div>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            label="Email address"
          />
        </div>

        <div>
          <Input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            label="Password"
          />
        </div>

        <div className="flex items-center justify-end">
          <div className="text-sm leading-6">
            <a className="font-semibold text-primary hover:text-primaryHover cursor-pointer">
              Forgot password?
            </a>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Sign in
          </Button>
        </div>
      </form>
    </div>
  );
};
