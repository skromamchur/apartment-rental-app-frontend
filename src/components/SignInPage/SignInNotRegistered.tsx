import NextLink from 'next/link';
import { APP_ROUTES } from '@/constants/routes/AppRoutes';

export const SignInNotRegistered = () => {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      Не маєте облікового запису?{' '}
      <NextLink
        className="font-semibold leading-6 text-primary hover:text-primaryHover cursor-pointer"
        href={APP_ROUTES.SIGN_UP}
      >
        Створити
      </NextLink>
    </p>
  );
};
