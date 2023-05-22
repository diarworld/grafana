import { SelectableValue, TimeOption } from '@grafana/data';

export const quickOptions: TimeOption[] = [
  { from: 'now-1d/d', to: 'now-1d/d', display: 'Вчера' },
  { from: 'now-1d/w', to: 'now-1d/d', display: 'Текущая неделя' },
  { from: 'now-1d/M', to: 'now-1d/d', display: 'С начала месяца' },
  { from: 'now-1d/y', to: 'now-1d/d', display: 'С начала года' },
  { from: 'now-2d/d', to: 'now-2d/d', display: 'Позавчера' },
  { from: 'now-7d/d', to: 'now-7d/d', display: 'Неделю назад' },
  { from: 'now-1w/w', to: 'now-1w/w', display: 'Прошлая неделя' },
  { from: 'now-1M/M', to: 'now-1M/M', display: 'Прошлый месяц' },
  { from: 'now-8d', to: 'now-1d/d', display: 'Последние 7 дней' },
  { from: 'now-31d', to: 'now-1d/d', display: 'Последние 30 дней' },
  { from: 'now-91d', to: 'now-1d/d', display: 'Последние 90 дней' },
  { from: 'now-6M-1d', to: 'now-1d/d', display: 'Последние 6 месяцев' },
  { from: 'now-1y-1d', to: 'now-1d/d', display: 'Последний 1 год' },
];

export const monthOptions: Array<SelectableValue<number>> = [
  { label: 'Январь', value: 0 },
  { label: 'Февраль', value: 1 },
  { label: 'Март', value: 2 },
  { label: 'Апрель', value: 3 },
  { label: 'Май', value: 4 },
  { label: 'Июнь', value: 5 },
  { label: 'Июль', value: 6 },
  { label: 'Август', value: 7 },
  { label: 'Сентябрь', value: 8 },
  { label: 'Октябрь', value: 9 },
  { label: 'Ноябрь', value: 10 },
  { label: 'Декабрь', value: 11 },
];
