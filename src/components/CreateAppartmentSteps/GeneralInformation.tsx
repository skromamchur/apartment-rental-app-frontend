import { Input } from '@/components/Inputs/Input';
import { SelectInput } from '@/components/Inputs/SelectInput';
import { TextareaInput } from '@/components/Inputs/TextareaInput';
import { FormCard } from '@/components/FormCard';
import { ROOMS_COUNT_OPTIONS } from '@/constants/RoomsCountOptions';
import { NewSelect } from '@/components/Inputs/NewSelect';
import React from 'react';
import { CreatePagePriceInput } from '@/components/Inputs/CreatePagePriceInput';
import { InputLabel } from '@/components/Inputs/InputLabel';

const options = [
  { value: 'day', label: 'Day' },
  { value: 'month', label: 'Month' },
];

export const GeneralInformation = () => {
  return (
    <FormCard>
      <h3 className="text-base font-semibold leading-6 text-gray-900">General Information</h3>
      <div className="mt-4 space-y-4">
        <div className="flex flex-col">
          <InputLabel label="Date/month" />
          <NewSelect options={options} name="type" />
        </div>
        <Input label="Title" name="title" />
        <TextareaInput label="Description" name="description" />
        <div className="grid grid-cols-6 gap-x-4">
          <CreatePagePriceInput />
          <Input
            label="Square"
            name="square"
            isIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-ruler"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h14a1 1 0 0 1 1 1v5a1 1 0 0 1 -1 1h-7a1 1 0 0 0 -1 1v7a1 1 0 0 1 -1 1h-5a1 1 0 0 1 -1 -1v-14a1 1 0 0 1 1 -1" />
                <path d="M4 8l2 0" />
                <path d="M4 12l3 0" />
                <path d="M4 16l2 0" />
                <path d="M8 4l0 2" />
                <path d="M12 4l0 3" />
                <path d="M16 4l0 2" />
              </svg>
            }
          />
          <SelectInput
            label="Rooms"
            options={ROOMS_COUNT_OPTIONS.map((option) => ({ value: option, label: option }))}
            name="rooms"
            defaultValue={1}
          />
          <Input
            label="Floor location"
            name="floorNumber"
            isIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-stairs"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M22 5h-5v5h-5v5h-5v5h-5" />
              </svg>
            }
          />
          <Input
            label="Floor total"
            name="totalFloors"
            isIcon
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-building-skyscraper"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M5 21v-14l8 -4v18" />
                <path d="M19 21v-10l-6 -4" />
                <path d="M9 9l0 .01" />
                <path d="M9 12l0 .01" />
                <path d="M9 15l0 .01" />
                <path d="M9 18l0 .01" />
              </svg>
            }
          />
        </div>
      </div>
    </FormCard>
  );
};
