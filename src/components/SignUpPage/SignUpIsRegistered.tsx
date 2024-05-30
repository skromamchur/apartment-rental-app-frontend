import NextLink from 'next/link';
import { APP_ROUTES } from '@/constants/routes/AppRoutes';

export const SignUpIsRegistered = () => {
  return (
    <p className="mt-10 text-center text-sm text-gray-500">
      Вже маєте обліковий запис?{' '}
      <NextLink
        className="font-semibold leading-6 text-primary hover:text-primaryHover"
        href={APP_ROUTES.SIGN_IN}
      >
        Увійти
      </NextLink>
    </p>
  );
};
