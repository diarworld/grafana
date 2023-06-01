import { css } from '@emotion/css';
import React, { useMemo } from 'react';

import { GrafanaTheme2 } from '@grafana/data';
import { Modal, useStyles2 } from '@grafana/ui';
import { getModKey } from 'app/core/utils/browser';

const getShortcuts = (modKey: string) => ({
  Глобальные: [
    { keys: ['g', 'h'], description: 'На главную' },
    { keys: ['g', 'p'], description: 'Профиль' },
    { keys: ['s', 'o'], description: 'Открыть поиск' },
    { keys: ['esc'], description: 'Выход из просмотра/редактирования' },
    { keys: ['h'], description: 'Показать все сочетания клавиш' },
    { keys: [`${modKey}+k`], description: 'Открыть палитру команд' },
    { keys: ['c', 't'], description: 'Менять тему' },
  ],
  Дашборд: [
    { keys: [`${modKey}+s`], description: 'Сохранить панель управления' },
    { keys: ['d', 'r'], description: 'Обновить все панели' },
    { keys: ['d', 's'], description: 'Настройки панели управления' },
    { keys: ['d', 'v'], description: 'Переключить неактивный режим/режим просмотра' },
    { keys: ['d', 'k'], description: 'Переключить режим киоска (скрывает верхнюю навигацию)' },
    { keys: ['d', 'E'], description: 'Развернуть все строки' },
    { keys: ['d', 'C'], description: 'Свернуть все строки' },
    { keys: ['d', 'a'], description: 'Переключить автоподгонку панелей (экспериментальная функция)' },
    { keys: [`${modKey}+o`], description: 'Переключить перекрестие общего графика' },
    { keys: ['d', 'l'], description: 'Переключить все легенды панели' },
  ],
  Панель: [
    { keys: ['e'], description: 'Переключить вид редактирования панели' },
    { keys: ['v'], description: 'Переключить панель в полноэкранный режим' },
    { keys: ['p', 's'], description: 'Открыть модальное окно общего доступа к панели' },
    { keys: ['p', 'd'], description: 'Дублировать панель' },
    { keys: ['p', 'r'], description: 'Удалить панель' },
    { keys: ['p', 'l'], description: 'Переключить легенду панели' },
  ],
  'Временной диапазон': [
    { keys: ['t', 'z'], description: 'Уменьшить диапазон времени' },
    {
      keys: ['t', '←'],
      description: 'Переместить временной диапазон назад',
    },
    {
      keys: ['t', '→'],
      description: 'Переместить временной диапазон вперед',
    },
    {
      keys: ['t', 'a'],
      description: 'Сделать временной диапазон абсолютным/постоянным',
    },
  ],
});

export interface HelpModalProps {
  onDismiss: () => void;
}

export const HelpModal = ({ onDismiss }: HelpModalProps): JSX.Element => {
  const styles = useStyles2(getStyles);
  const modKey = useMemo(() => getModKey(), []);
  const shortcuts = useMemo(() => getShortcuts(modKey), [modKey]);
  return (
    <Modal title="Горячие клавиши" isOpen onDismiss={onDismiss} onClickBackdrop={onDismiss}>
      <div className={styles.categories}>
        {Object.entries(shortcuts).map(([category, shortcuts], i) => (
          <div className={styles.shortcutCategory} key={i}>
            <table className={styles.shortcutTable}>
              <tbody>
                <tr>
                  <th className={styles.shortcutTableCategoryHeader} colSpan={2}>
                    {category}
                  </th>
                </tr>
                {shortcuts.map((shortcut, j) => (
                  <tr key={`${i}-${j}`}>
                    <td className={styles.shortcutTableKeys}>
                      {shortcut.keys.map((key, k) => (
                        <span className={styles.shortcutTableKey} key={`${i}-${j}-${k}`}>
                          {key}
                        </span>
                      ))}
                    </td>
                    <td className={styles.shortcutTableDescription}>{shortcut.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </Modal>
  );
};

function getStyles(theme: GrafanaTheme2) {
  return {
    titleDescription: css`
      font-size: ${theme.typography.bodySmall.fontSize};
      font-weight: ${theme.typography.bodySmall.fontWeight};
      color: ${theme.colors.text.disabled};
      padding-bottom: ${theme.spacing(2)};
    `,
    categories: css`
      font-size: ${theme.typography.bodySmall.fontSize};
      display: flex;
      flex-flow: row wrap;
      justify-content: space-between;
      align-items: flex-start;
    `,
    shortcutCategory: css`
      width: 50%;
      font-size: ${theme.typography.bodySmall.fontSize};
    `,
    shortcutTable: css`
      margin-bottom: ${theme.spacing(2)};
    `,
    shortcutTableCategoryHeader: css`
      font-weight: normal;
      font-size: ${theme.typography.h6.fontSize};
      text-align: left;
    `,
    shortcutTableDescription: css`
      text-align: left;
      color: ${theme.colors.text.disabled};
      width: 99%;
      padding: ${theme.spacing(1, 2)};
    `,
    shortcutTableKeys: css`
      white-space: nowrap;
      width: 1%;
      text-align: right;
      color: ${theme.colors.text.primary};
    `,
    shortcutTableKey: css`
      display: inline-block;
      text-align: center;
      margin-right: ${theme.spacing(0.5)};
      padding: 3px 5px;
      font: 11px Consolas, 'Liberation Mono', Menlo, Courier, monospace;
      line-height: 10px;
      vertical-align: middle;
      border: solid 1px ${theme.colors.border.medium};
      border-radius: ${theme.shape.borderRadius(3)};
      color: ${theme.colors.text.primary};
      background-color: ${theme.colors.background.secondary};
    `,
  };
}
