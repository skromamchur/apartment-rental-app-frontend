import { InputHTMLAttributes, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { InputLabel } from '@/components/Inputs/InputLabel';

import classNames from 'classnames';
import { ErrorMessage } from '@hookform/error-message';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  wrapperClassName?: string;
  isIcon?: boolean;
  icon?: ReactNode;
}

export const Input = ({
  label,
  name,
  wrapperClassName = '',
  isIcon = false,
  icon,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={wrapperClassName}>
      <InputLabel label={label} />
      <div className="mt-2 relative">
        {isIcon && (
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            {icon}
          </div>
        )}
        <input
          className={classNames(
            'block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 focus:!outline-primary',
            isIcon ? ' pl-8' : 'pl-4',
          )}
          {...register(name)}
          {...props}
        />
      </div>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-300">{message}</p>}
      />
    </div>
  );
};
