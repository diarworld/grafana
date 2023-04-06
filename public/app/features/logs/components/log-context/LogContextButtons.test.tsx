import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';

import { SelectableValue } from '@grafana/data';

import { LogContextButtons, LoadMoreOptions } from './LogContextButtons';

describe('LogContextButtons', () => {
  const onChangeOption = jest.fn();
  const option: SelectableValue<number> = { label: '10 lines', value: 10 };
  const position: 'top' | 'bottom' = 'bottom';

  beforeEach(() => {
    render(<LogContextButtons option={option} onChangeOption={onChangeOption} position={position} />);
  });

  it('should render a ButtonGroup with one button', () => {
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(1);
  });

  it('should render a ButtonSelect with LoadMoreOptions', () => {
    const tenLinesButton = screen.getByRole('button', {
      name: /10 lines/i,
    });
    fireEvent.click(tenLinesButton);
    const options = screen.getAllByRole('menuitemradio');
    expect(options.length).toBe(LoadMoreOptions.length);
    options.forEach((optionEl, index) => {
      expect(optionEl).toHaveTextContent(LoadMoreOptions[index].label!);
    });
  });

  it('should call onChangeOption when an option is selected', () => {
    const tenLinesButton = screen.getByRole('button', {
      name: /10 lines/i,
    });
    fireEvent.click(tenLinesButton);
    const twentyLinesButton = screen.getByRole('menuitemradio', {
      name: /20 lines/i,
    });
    fireEvent.click(twentyLinesButton);
    const newOption = { label: '20 lines', value: 20 };
    expect(onChangeOption).toHaveBeenCalledWith(newOption);
  });
});
