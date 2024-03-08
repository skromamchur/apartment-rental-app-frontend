import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'mx-auto flex flex-row space-x-[13px] rounded-[5px] items-center justify-center py-[10px] px-4',
        variant === 'primary'
          ? 'bg-[#E02828] hover:bg-[#800000] text-white'
          : 'text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
