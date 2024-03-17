import { ApartmentSortType } from '@/types/Apartament';

export const SORT_OPTIONS: { value: ApartmentSortType; label: string }[] = [
  { value: 'DATE', label: 'Sort by date' },
  { value: 'PRICE_ASC', label: 'Sort by price ascending' },
  { value: 'PRICE_DESC', label: 'Sort by price descending' },
  { value: 'PRICE_PER_SQUARE_ASC', label: 'Sort by price per square ascending' },
  { value: 'PRICE_PER_SQUARE_DESC', label: 'Sort by price per square descending' },
];

export const APARTMENT_FILTERS = [
  {
    id: 'type',
    name: 'Type',
    options: [
      { value: 'month', label: 'Month' },
      { value: 'day', label: 'Day' },
      { value: 'room', label: 'Room' },
      { value: 'co-rental', label: 'Co-rental' },
    ],
    type: 'checkboxes',
  },
  {
    id: 'roomsCount',
    name: 'Rooms',
    options: [
      { value: 1, label: '1' },
      { value: 2, label: '2' },
      { value: 3, label: '3' },
      { value: 4, label: '4' },
      { value: 5, label: '5' },
      { value: 6, label: '6' },
      { value: 7, label: '7' },
      { value: 8, label: '8' },
    ],
    type: 'checkboxes',
  },
  {
    id: 'floors',
    name: 'Floor',
    options: [],
    type: 'inputs',
  },
  {
    id: 'sizes',
    name: 'Square',
    options: [],
    type: 'inputs',
  },
  {
    id: 'prices',
    name: 'Prices',
    type: 'inputs',
    options: [],
  },
];
