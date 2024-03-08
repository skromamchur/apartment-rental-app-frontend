import NextImage from 'next/image';

export const SignInHeader = () => (
  <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <div className="flex items-center justify-center">
      <NextImage src="/logo.svg" width="48" height="32" />
    </div>
    <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
      Sign in to your account
    </h2>
  </div>
);
