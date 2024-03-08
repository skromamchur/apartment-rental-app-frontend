import { ReactNode } from 'react';

export const InputPrice = ({
  label,
  onChange,
  value,
  icon,
}: {
  label: string;
  onChange: (event: any) => void;
  value: number;
  icon: ReactNode;
}) => (
  <div className="min-w-[96px]">
    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
      {label}
    </label>
    <div className="relative mt-2 rounded-md shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        {icon}
      </div>
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full rounded-md border-0 py-1.5 pl-7 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="0.00"
        aria-describedby="price-currency"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  </div>
);
