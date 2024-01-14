import '@/styles/globals.css';
import type { AppProps } from 'next/app';

import queryClient from '@/api/config/queryClient';

import { QueryClientProvider } from '@tanstack/react-query';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
