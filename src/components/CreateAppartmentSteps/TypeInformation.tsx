import React from 'react';
import { Button } from '@/components/Button';

export const TypeInformation = () => {
  return (
    <div className="bg-white px-4 py-5 sm:px-6 rounded-t-[20px] min-h-[156px]">
      <h3 className="text-base font-semibold leading-6 text-gray-900">General Information</h3>
      <div className="flex flex-row  h-full flex items-center justify-between px-6">
        <Button>First</Button>
        <Button>First</Button>
        <Button>First</Button>
        <Button>First</Button>
      </div>
    </div>
  );
};
