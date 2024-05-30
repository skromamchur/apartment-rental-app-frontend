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
  { value: 'day', label: 'Day rental' },
  { value: 'month', label: 'Month rental' },
  { value: 'room', label: 'Room rental' },
  { value: 'co-renting', label: 'Co-renting' },
];

export const GeneralInformation = () => {
  return (
    <div className="bg-white p-8 sm:px-6 rounded-lg shadow">
      <h3 className="text-base font-semibold leading-6 text-gray-900">Загальна Інформація</h3>
      <div className="mt-4 space-y-4">
        <div className="flex flex-col">
          <InputLabel label="Тип угоди" />
          <NewSelect options={options} name="type" />
        </div>
        <Input label="Заголовок" name="title" placeholder='Наприклад, "Здається 2-кімнатна квартира"'/>
        <TextareaInput label="Опис" name="description" placeholder='Опишіть квартиру, розташування та зручності...'/>
        <CreatePagePriceInput />
        <div className="flex flex-row space-x-4">
          <Input
            label="Площа"
            name="square"
            wrapperClassName="flex-1"
            placeholder="Вкажіть площу в квадратних метрах"
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
            label="Кількість кімнат"
            options={ROOMS_COUNT_OPTIONS.map((option) => ({ value: option, label: option }))}
            name="rooms"
            defaultValue={1}
            className="flex-1"
          />
        </div>
        <div className="space-x-4 flex flex-row">
          <Input
            label="Поверх"
            name="floorNumber"
            wrapperClassName="flex-1"
            isIcon
            placeholder='Наприклад, "10"'
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
            label="Поверховість"
            name="totalFloors"
            placeholder='Наприклад, "10"'
            wrapperClassName="flex-1"
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
        <div className="flex flex-row space-x-4">
          <SelectInput
            label="Опалення"
            options={ROOMS_COUNT_OPTIONS.map((option) => ({ value: option, label: option }))}
            name="rooms"
            defaultValue={1}
            className="flex-1"
          />
          <SelectInput
            label="Тип стін"
            options={ROOMS_COUNT_OPTIONS.map((option) => ({ value: option, label: option }))}
            name="rooms"
            defaultValue={1}
            className="flex-1"
          />
        </div>
        <div className="flex flex-row space-x-4">
          <SelectInput
            label="Вік будівлі"
            options={ROOMS_COUNT_OPTIONS.map((option) => ({ value: option, label: option }))}
            name="rooms"
            defaultValue={1}
            className="flex-1"
          />
          <SelectInput
            label="Санвузол"
            options={ROOMS_COUNT_OPTIONS.map((option) => ({ value: option, label: option }))}
            name="rooms"
            defaultValue={1}
            className="flex-1"
          />
        </div>
      </div>
    </div>
  );
};
