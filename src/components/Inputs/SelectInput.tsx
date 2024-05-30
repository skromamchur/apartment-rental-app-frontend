import { useController } from 'react-hook-form';

import Select from 'react-select';
import { InputLabel } from '@/components/Inputs/InputLabel';
import classNames from 'classnames';

export const SelectInput = ({ label, options, name, defaultValue, className = '' }) => {
  const {
    field: { onChange, value },
  } = useController({ name, defaultValue });

  return (
    <div className={className}>
      <InputLabel label={label} />
      <Select
        placeholder="Виберіть..."
        defaultValue={defaultValue ?? options[0]}
        onChange={({ value }) => onChange(value)}
        options={options}
        className={classNames('mt-2 h-9 shadow-sm')}
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
    </div>
  );
};
