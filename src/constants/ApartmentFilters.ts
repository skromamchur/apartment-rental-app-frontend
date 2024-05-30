import { ApartmentSortType } from '@/types/Apartament';

export const SORT_OPTIONS: { value: ApartmentSortType; label: string }[] = [
  { value: 'DATE', label: 'Сортувати за датою' },
  { value: 'PRICE_ASC', label: 'Сортувати за ціною (зростання)' },
  { value: 'PRICE_DESC', label: 'Сортувати за ціною (спадання)' },
  { value: 'AREA_ASC', label: 'Сортувати за площею (зростання)' },
  { value: 'AREA_DESC', label: 'Сортувати за площею (спадання)' },
  { value: 'PRICE_PER_SQUARE_ASC', label: 'Сортувати за ціною за квадратний метр (зростання)' },
  { value: 'PRICE_PER_SQUARE_DESC', label: 'Сортувати за ціною за квадратний метр (спадання)' },
  { value: 'ROOMS_ASC', label: 'Сортувати за кількістю кімнат (зростання)' },
  { value: 'ROOMS_DESC', label: 'Сортувати за кількістю кімнат (спадання)' },
  // { value: 'LANDLORD_RATING', label: 'Сортувати за рейтингом орендодавця' }
];

export const APARTMENT_FILTERS = [
  {
    id: 'type',
    name: 'Тип оренди',
    options: [
      { value: 'month', label: 'На місяць' },
      { value: 'day', label: 'На добу' },
      { value: 'room', label: 'Кімната' },
      { value: 'co-renting', label: 'Спільна оренда' },
    ],
    type: 'checkboxes',
  },

  {
    id: 'roomsCount',
    name: 'Кількість кімнат',
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
    name: 'Поверх',
    options: [],
    type: 'inputs',
  },
  {
    id: 'sizes',
    name: 'Площа',
    options: [],
    type: 'inputs',
  },
  {
    id: 'prices',
    name: 'Ціна',
    type: 'inputs',
    options: [],
  },
  {
    id: 'pets',
    name: 'Домашні улюбленці',
    options: [
      { value: 'allow', label: 'Так' },
      { value: 'deny', label: 'Ні' },
    ],
    type: 'checkboxes',
  },
  {
    id: 'walls',
    name: 'Тип стін',
    options: [
      { value: 'панельний', label: 'Панельний' },
      { value: 'цегляний', label: 'Цегляний' },
      { value: 'газоблок', label: 'Газоблок' },
    ],
    type: 'checkboxes',
  },
  {
    id: 'warming',
    name: 'Опалення',
    options: [
      { value: 'individual', label: 'Індивідуальне' },
      { value: 'center', label: 'Централізоване' },
    ],
    type: 'checkboxes',
  },
];
