import { FormCard } from '@/components/FormCard';

import { useController } from 'react-hook-form';

export const PhotosInformation = () => {
  const { field } = useController({
    name: 'photo',
  });

  return (
    <FormCard>
      <input
        type="file"
        multiple
        onChange={(event) => {
          field.onChange(event.target.files[0] as File);
        }}
      />
    </FormCard>
  );
};

