export const FeatureItemCheckbox = ({ label }: { label: string }) => {
  return (
    <div className="flex flex-row space-x-2">
      <input type="checkbox" />
      <span>{label}</span>
    </div>
  );
};
