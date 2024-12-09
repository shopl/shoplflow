import React, { useRef } from 'react';
import { StyledNumberCombobox } from './NumberCombobox.styled';
import type { NumberComboboxProps } from './NumberCombobox.types';
import { Input } from '../Inputs';
import { IconButton } from '../Buttons';
import { Icon } from '../Icon';
import { UpArrowSolidXsmallIcon } from '@shoplflow/shopl-assets';
import { Popper } from '../Popper';
import { offset, shift } from '@floating-ui/core';
import { useOutsideClick } from '@shoplflow/utils';
import { Menu } from '../Menu';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { colorTokens } from '../../styles';
import { HOURS, MINUTES } from './NumberComboboxLists';

const NumberCombobox = ({ inputType, unit }: NumberComboboxProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-number-combobox`).current;

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  let items = inputType === 'hours' ? HOURS : MINUTES;

  if (unit) {
    items = items.filter((item) => Number(item.value) % unit === 0);
  }

  return (
    <StyledNumberCombobox data-shoplflow={'NumberCombobox'} color='shopl300'>
      <Popper middlewares={[shift({ padding: 4 }), offset(4)]}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <Input
            sizeVar='S'
            width='90px'
            type='number'
            style={{ textAlign: 'left' }}
            minWidth='50px'
            className={selector}
            rightSource={
              <IconButton
                sizeVar='XS'
                styleVar='GHOST'
                className={selector}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <Icon iconSource={UpArrowSolidXsmallIcon} />
              </IconButton>
            }
          />
        </Popper.Trigger>
        <Popper.Portal>
          <Stack.Vertical
            className={selector}
            style={{
              height: '100%',
              maxHeight: '128px',
              width: '90px',
              padding: '4px',
              filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.12))',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.12)',
              borderRadius: '8px',
              overflowY: 'scroll',
              backgroundColor: colorTokens.neutral0,
            }}
          >
            <Stack.Vertical
              className={selector}
              style={{
                height: '100%',
                width: '100%',
              }}
            >
              {items.map((item) => (
                <Menu key={item.value}>
                  <Text typography='body1_400'>{item.label}</Text>
                </Menu>
              ))}
            </Stack.Vertical>
          </Stack.Vertical>
        </Popper.Portal>
      </Popper>
    </StyledNumberCombobox>
  );
};

export default NumberCombobox;
