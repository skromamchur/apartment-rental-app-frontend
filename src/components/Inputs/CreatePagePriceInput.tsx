import { InputLabel } from '@/components/Inputs/InputLabel';
import { useFormContext } from 'react-hook-form';
import { useState } from 'react';

export const CreatePagePriceInput = () => {
  const { register } = useFormContext();

  const [currency, setCurrency] = useState<'USD' | 'EUR' | 'UAH'>('UAH');

  const getCurrencySymbol = () => {
    switch (currency) {
      case 'UAH':
        return '₴';
      case 'EUR':
        return '€';
      case 'USD':
        return '$';
    }
  };

  return (
    <div className="col-span-2">
      <InputLabel label="Price" />
      <div className="relative mt-2 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <span className="text-gray-500 sm:text-sm">{getCurrencySymbol()}</span>
        </div>
        <input
          type="text"
          name="price"
          id="price"
          className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="0.00"
          {...register('price')}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="sr-only">
            Currency
          </label>
          <select
            id="currency"
            name="currency"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-3 text-gray-500  sm:text-sm focus:outline-none"
            defaultValue="UAH"
            onChange={(event) => {
              setCurrency(event.target.value as 'USD' | 'EUR' | 'UAH');
            }}
          >
            <option>UAH</option>
            <option>USD</option>
            <option>EUR</option>
          </select>
        </div>
      </div>
    </div>
  );
};
