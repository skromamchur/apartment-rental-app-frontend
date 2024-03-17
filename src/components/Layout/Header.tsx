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
  { name: 'Room rental', href: '/?type=room' },
  { name: 'Co-renting', href: '/?type=co-renting' },
];

const HeaderIcon = ({ children, onClick }) => {
  return (
    <div
      className="w-12 h-12 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-gray-300 cursor-pointer"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

const Logout = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    stroke-width="1.5"
    stroke="#000000"
    fill="none"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
    <path d="M9 12h12l-3 -3" />
    <path d="M18 15l3 -3" />
  </svg>
);

const Icons = () => {
  const router = useRouter();

  const { logOut, isAuth } = useContext(UserContext);

  if (!isAuth) return null;
  return (
    <div className="flex flex-row space-x-4">
      <HeaderIcon
        onClick={() => {
          router.push(APP_ROUTES.CREATE);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-circle-plus"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
          <path d="M9 12h6" />
          <path d="M12 9v6" />
        </svg>
      </HeaderIcon>
      <HeaderIcon
        onClick={() => {
          router.push(APP_ROUTES.PROFILE);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-user-circle"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </HeaderIcon>
      <HeaderIcon
        onClick={() => {
          router.push(APP_ROUTES.CHATS);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-message"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#000000"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 9h8" />
          <path d="M8 13h6" />
          <path d="M18 4a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-5l-5 3v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12z" />
        </svg>
      </HeaderIcon>
      <HeaderIcon
        onClick={() => {
          logOut();
        }}
      >
        <Logout />
      </HeaderIcon>
    </div>
  );
};

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { logOut, isAuth, firstName, lastName, avatar } = useContext(UserContext);

  const router = useRouter();

  return (
    <header className="bg-white shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] min-h-[60px] border-b border-gray-200">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex flex-row space-x-3 items-center justify-center">
          <UserAvatar size="small" avatar={avatar} />
          <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
            {firstName} {lastName}
          </p>
        </div>
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
          <div className="flex flex-row space-x-4">
            <Icons />
          </div>
          {!isAuth && (
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
          )}
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
                <Icons />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
