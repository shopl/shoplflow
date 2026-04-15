import figma from '@figma/code-connect';
import Dropdown from './Dropdown';
import { Menu } from '../Menu';
import { Text } from '../Text';
import { Icon } from '../Icon';
import { SearchIcon } from '@shoplflow/shopl-assets';
import { noop } from 'packages/utils/src';

figma.connect(Dropdown, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/-v2.0--Shopl-Flow?node-id=407%3A5154', {
  props: {
    sizeVar: figma.enum('sizeVar', {
      xs: 'XS',
      s: 'S',
      m: 'M',
      l: 'L',
    }),
    styleVar: figma.enum('styleVar', {
      normal: 'NORMAL',
      ghost: 'GHOST',
    }),
    disabled: figma.enum('status', {
      disabled: true,
    }),
    isError: figma.enum('status', {
      error: true,
    }),
    isOpen: figma.enum('menu', {
      open: true,
    }),
    option: figma.enum('option', {
      outside: 'OUTSIDE_CLICK',
      click: 'CLICK',
      none: 'NONE',
    }),
    hasValue: figma.boolean('hasValue', {
      true: (
        <Text typography='body1_400' color={'neutral700'} textOverflow={'ellipsis'} lineClamp={1}>
          선택된 옵션
        </Text>
      ),
      false: undefined,
    }),
    leftSource: figma.boolean('leftIcon', {
      true: <Icon iconSource={SearchIcon} sizeVar='S' />,
      false: undefined,
    }),
    onClear: figma.boolean('clear', {
      true: undefined,
      false: undefined,
    }),
  },
  example: ({
    sizeVar = 'M',
    styleVar = 'NORMAL',
    disabled,
    isError,
    isOpen,
    option = 'OUTSIDE_CLICK',
    hasValue,
    leftSource,
    onClear,
  }) => (
    <Dropdown
      isOpen={isOpen}
      option={option}
      width='100%'
      offset={4}
      trigger={
        <Dropdown.Button
          disabled={disabled}
          sizeVar={sizeVar}
          styleVar={styleVar}
          isError={isError}
          placeholder='값이 없어서 보이는 placeholder'
          leftSource={leftSource}
          onClear={onClear}
          value={hasValue}
        />
      }
      popper={
        <Dropdown.Content type={'FILL'}>
          <Menu onClick={noop}>Option 1</Menu>
          <Menu isSelected onClick={noop}>
            Option 2
          </Menu>
          <Menu onClick={noop}>Option 3</Menu>
        </Dropdown.Content>
      }
    />
  ),
});
