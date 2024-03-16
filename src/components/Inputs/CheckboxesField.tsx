import { useState } from 'react';
import classNames from 'classnames';

interface CheckboxesFieldProps {
  checkboxesOptions: { label: string; value: any }[];
  value: any;
  onChange: any;
}

const CheckBoxInput = ({
  checked = true,
  onClick = () => {},
}: {
  checked: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={classNames(
        'w-6 h-6 min-w-[24px] min-h-[24px] rounded-md flex items-center justify-center cursor-pointer border border-primary transition-all duration-300',
        checked && 'bg-primary',
        !checked && '',
      )}
      onClick={onClick}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-check"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="#ffffff"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M5 12l5 5l10 -10" />
        </svg>
      )}
    </div>
  );
};

export const CheckboxesField = ({ checkboxesOptions, value, onChange }: CheckboxesFieldProps) => {
  return (
    <div className="flex flex-col space-y-3">
      {checkboxesOptions.map((option, optionIdx) => (
        <div key={option.value} className="flex items-center">
          <div className="flex h-6 items-center">
            <CheckBoxInput
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
              onClick={() => {
                const tempValue = value.includes(option.value);
                if (!tempValue) {
                  onChange([...value, option.value]);
                } else {
                  onChange(value.filter((el) => el !== option.value));
                }
              }}
              checked={value.includes(option.value)}
            />
          </div>
          <label className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};
