import { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { UserContext } from '@/contexts/UserContext';
import { useRouter } from 'next/router';

import NextImage from 'next/image';
import NextLink from 'next/link';

import { APP_ROUTES } from '@/constants/routes/AppRoutes';
import { UserAvatar } from '@/components/UserAvatar';

const navigation = [
  { name: 'All apartments', href: '/' },
  { name: 'Month rental', href: '/?type=month' },
  { name: 'Daily rental', href: '/?type=daily' },
  { name: 'Settings', href: '/settings' },
];

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { logOut, isAuth, firstName, lastName, avatar } = useContext(UserContext);

  const router = useRouter();

  return (
    <header className="bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-[60px] border-b border-gray-200">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <NextLink href={APP_ROUTES.HOME}>
          <NextImage src="/logo.svg" width="48" height="32" alt="" />
        </NextLink>
        <div className="flex items-center gap-x-12">
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex">
          {isAuth && (
            <a href="#" className="group block flex-shrink-0 mr-4 ">
              <div className="flex items-center space-x-2">
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {firstName} {lastName}
                  </p>
                </div>
                <div>
                  <UserAvatar avatar={avatar} />
                </div>
              </div>
            </a>
          )}
          <button
            onClick={() => {
              console.log(isAuth);
              if (isAuth) {
                logOut();
              } else {
                router.push('/sign-in');
              }
            }}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {isAuth ? 'Log out' : 'Log in'} <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NextLink href={APP_ROUTES.HOME}>
              <NextImage src="/logo.svg" width="48" height="32" alt="" />
            </NextLink>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {isAuth ? 'Log out' : 'Log in'}
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
