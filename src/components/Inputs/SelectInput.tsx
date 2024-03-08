import { useController } from 'react-hook-form';

import Select from 'react-select';
import { InputLabel } from '@/components/Inputs/InputLabel';

export const SelectInput = ({ label, options, name, defaultValue }) => {
  const {
    field: { onChange, value },
  } = useController({ name, defaultValue });

  return (
    <div>
      <InputLabel label="Rooms count" />
      <Select
        defaultValue={defaultValue ?? options[0]}
        onChange={({ value }) => onChange(value)}
        options={options}
        className="mt-2 h-9"
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            minHeight: '36px',
          }),
          valueContainer: (baseStyles, state) => ({
            ...baseStyles,
            padding: '0 8px',
          }),
        }}
      />
    </div>
  );
};
