import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import queryClient from '@/api/config/queryClient';

import { QueryClientProvider } from '@tanstack/react-query';
import { UserProvider } from '@/contexts/UserContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <Component {...pageProps} />
      </UserProvider>
    </QueryClientProvider>
  );
}
