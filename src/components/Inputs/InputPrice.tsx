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
      <input
        type="text"
        name="price"
        id="price"
        className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 !outline-none"
        placeholder="0.00"
        aria-describedby="price-currency"
        onChange={(event) => onChange(event.target.value)}
        value={value}
      />
    </div>
  </div>
);
