import Select from 'react-select';
import React from 'react';
import { useController } from 'react-hook-form';

export const NewSelect = ({ options, name }) => {
  const {
    field: { onChange, value: selectValue },
  } = useController({
    name,
  });

  return (
    <Select
      className="mt-2"
      options={options}
      placeholder="Виберіть..."
      onChange={({ value }) => {
        console.log(value);
        onChange(value);
      }}
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          minHeight: '36px',
        }),
        valueContainer: (baseStyles, state) => ({
          ...baseStyles,
          padding: '0 8px',
        }),
        placeholder : (base, state) => ({
          ...base,
          fontSize : "14px",
        })
      }}
    />
  );
};
