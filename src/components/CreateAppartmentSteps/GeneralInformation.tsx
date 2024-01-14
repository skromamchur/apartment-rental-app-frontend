import { Input } from '@/components/Inputs/Input';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { TextareaInput } from '@/components/Inputs/TextareaInput';
import { FormCard } from '@/components/FormCard';
import { ROOMS_COUNT_OPTIONS } from '@/constants/RoomsCountOptions';

export const GeneralInformation = () => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">General Information</h3>
      <div className="mt-8 space-y-4">
        <Input label="Title" name="title" />
        <TextareaInput label="Description" name="description" />
        <Input label="Price" name="price" />
        <Input label="Square" name="square" />
        <SelectInput label="Rooms" options={ROOMS_COUNT_OPTIONS} name="rooms" defaultValue={1} />
        <Input label="Floor location" name="floorNumber" />
        <Input label="Floor total" name="totalFloors" />
        {/*<Input label="Warming type" />*/}
      </div>
    </FormCard>
  );
};
