import { Checkbox } from '@/components/Inputs/Checkbox';

export const FeatureItemCheckbox = ({
  label,
  onChange,
}: {
  label: string;
  onChange: (value: boolean) => void;
}) => {
  return (
    <div className="flex flex-row space-x-3">
      <Checkbox onChange={onChange} />
      <span>{label}</span>
    </div>
  );
};
