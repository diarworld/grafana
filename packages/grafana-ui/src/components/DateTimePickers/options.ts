import { SelectableValue, TimeOption } from '@grafana/data';

export const quickOptions: TimeOption[] = [
  { from: 'now/w', to: 'now/w', display: 'Текущая неделя' },
  { from: 'now/M', to: 'now', display: 'С начала месяца' },
  { from: 'now/y', to: 'now/y', display: 'Этот год' },
  { from: 'now/y', to: 'now', display: 'С начала года' },
  { from: 'now-1d/d', to: 'now-1d/d', display: 'Вчера' },
  { from: 'now-2d/d', to: 'now-2d/d', display: 'Позавчера' },
  { from: 'now-7d/d', to: 'now-7d/d', display: 'Неделю назад' },
  { from: 'now-1w/w', to: 'now-1w/w', display: 'Прошлая неделя' },
  { from: 'now-1M/M', to: 'now-1M/M', display: 'Прошлый месяц' },
  { from: 'now-1Q/fQ', to: 'now-1Q/fQ', display: 'Прошлый фискальный квартал' },
  { from: 'now-1y/y', to: 'now-1y/y', display: 'Прошлый год' },
  { from: 'now-7d', to: 'now', display: 'Последние 7 дней' },
  { from: 'now-30d', to: 'now', display: 'Последние 30 дней' },
  { from: 'now-90d', to: 'now', display: 'Последние 90 дней' },
  { from: 'now-6M', to: 'now', display: 'Последние 6 месяцев' },
  { from: 'now-1y', to: 'now', display: 'Последний 1 год' },
  { from: 'now-2y', to: 'now', display: 'Последние 2 года' },
  { from: 'now-5y', to: 'now', display: 'Последние 5 лет' },
  { from: 'now/fQ', to: 'now', display: 'С начала фискального квартала' },
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
