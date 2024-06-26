import { ButtonHTMLAttributes, ReactNode } from 'react';
import classNames from 'classnames';

const classes = {
  variant: {
    primary: 'bg-[#E02828] hover:bg-[#800000] text-white',
    secondary: 'text-gray-900 bg-white ring-1 ring-inset ring-gray-300 hover:bg-gray-50',
    text: '!p-0 text-gray-400 !flex-0',
  },
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'text';
  className?: string;
}

export const Button = ({ children, className, variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={classNames(
        'flex flex-row space-x-[13px] rounded-[5px] items-center justify-center py-[10px] px-4',
        classes.variant[variant],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
