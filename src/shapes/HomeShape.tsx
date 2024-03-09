import { Inter } from 'next/font/google';
import { Header } from '@/components/Layout/Header';

const inter = Inter({ subsets: ['latin'] });
import { FilterColumn } from '@/components/FilterColumn';

export const HomeShape = () => {
  return (
    <div
      className={`flex min-h-screen flex-col bg-[#F8F8F8] w-screen overflow-hidden ${inter.className}`}
    >
      <Header />
      <div className="mx-auto w-full mt-4">
        <FilterColumn />
      </div>
    </div>
  );
};
