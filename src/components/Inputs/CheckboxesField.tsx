interface CheckboxesFieldProps {
  checkboxesOptions: { label: string; value: any }[];
  value: any;
  onChange: any;
}

export const CheckboxesField = ({ checkboxesOptions, value, onChange }: CheckboxesFieldProps) => {
  return checkboxesOptions.map((option, optionIdx) => (
    <div key={option.value} className="flex items-center">
      <input
        type="checkbox"
        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
        onChange={(event) => {
          if (event.target.checked) {
            onChange([...value, option.value]);
          } else {
            onChange(value.filter((el) => el !== option.value));
          }
        }}
        checked={value.includes(option.value)}
      />
      <label className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900">
        {option.label}
      </label>
    </div>
  ));
};
