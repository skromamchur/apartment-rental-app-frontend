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
      onChange={({ value }) => {
        console.log(value);
        onChange(value);
      }}
    />
  );
};
