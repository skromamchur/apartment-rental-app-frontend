import { Inter } from 'next/font/google';
import { Header } from '@/components/Layout/Header';

const inter = Inter({ subsets: ['latin'] });
import { FilterColumn } from '@/components/FilterColumn';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';
import { FilterContext } from '@/contexts/FilterContext';

export const HomeShape = () => {
  const router = useRouter();

  const { handleTypeChange } = useContext(FilterContext);

  useEffect(() => {
    if (router.query) {
      if (router.query.type === 'month') {
        handleTypeChange(['month']);
      }
      if (router.query.type === 'daily') {
        handleTypeChange(['day']);
      }
      if (router.query.type === 'co-renting') {
        handleTypeChange(['co-renting']);
      }
      if (router.query.type === 'room') {
        handleTypeChange(['room']);
      }
    }
  }, [router]);

  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden ${inter.className}`}
    >
      <Header />
      <div className="mx-auto w-full">
        <FilterColumn />
      </div>
    </div>
  );
};
