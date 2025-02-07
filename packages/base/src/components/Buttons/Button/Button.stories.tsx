import type { StoryFn, Meta } from '@storybook/react';
import Button from './Button';
import type { ButtonProps } from './Button.types';
import { ButtonSizeVariants, ButtonStyleVariants } from './Button.types';
import { ComponentStage } from '../../../styles/Box';
import { Stack } from '../../Stack';
import { colorTokens } from '../../../styles';
import { Icon } from '../../../components/Icon';
import { EditIcon } from '@shoplflow/shopl-assets';

const meta: Meta<typeof Button> = {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  argTypes: {
    styleVar: {
      options: Object.values(ButtonStyleVariants),
      control: { type: 'select' },
      description: '버튼의 스타일을 설정합니다. SOLID를 선택할 경우 color 속성도 지정해주셔야 합니다.',
      defaultValue: 'primary',
    },
    sizeVar: {
      options: Object.values(ButtonSizeVariants),
      control: { type: 'select' },
      description: '버튼의 사이즈를 선택합니다.',
      defaultValue: 'M',
    },
    color: {
      description: 'styleVar가 SOLID일 때의 버튼의 배경 색상을 선택합니다.',
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      defaultValue: 'coolgray200',
    },
    as: {
      description: '컴포넌트의 HTML 요소를 변경할 수 있습니다. (기본값: button)',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Spinner가 노출되는 로딩 상태 여부를 설정합니다.',
      defaultValue: false,
    },
    children: {
      description:
        '버튼 내부에 들어가는 요소로, 기본적으로 `string` 타입을 지원하나 필요에 따라 `React.ReactNode` 타입의 요소를 자유롭게 넣을 수 있습니다.',
    },
    disabled: {
      description: '버튼의 비활성화 여부를 설정합니다.',
    },
    onClick: {
      description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
      action: 'clicked',
    },
    lineClamp: {
      description: '버튼 내부의 콘텐츠를 지정한 줄 수만큼 제한합니다.',
      control: { type: 'number' },
    },
  },
};

export default meta;

export const Playground: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: 'Button',
  disabled: false,
};

Playground.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/%5BShopl-Flow%5D-Shopl-%26-Hada-%EC%9B%B9-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B3%B5%ED%86%B5%ED%99%94?node-id=407-3568',
  },
};

export const Primary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Primary.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'M',
  children: 'Primary Button',
  disabled: false,
};

export const Secondary: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Secondary.args = {
  styleVar: 'SECONDARY',
  sizeVar: 'M',
  children: 'Secondary Button',
  disabled: false,
};

export const Solid: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Solid.args = {
  styleVar: 'SOLID',
  sizeVar: 'M',
  children: 'Solid Button',
  color: 'neutral300',
  disabled: false,
  leftSource: <Icon sizeVar='S' iconSource={EditIcon} />,
};

export const Ghost: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

Ghost.args = {
  styleVar: 'GHOST',
  sizeVar: 'M',
  children: 'Ghost Button',
  disabled: false,
};

export const SmallSize: StoryFn<ButtonProps> = (args) => {
  return (
    <Stack width={'200px'}>
      <ComponentStage>
        <Button {...args} />
      </ComponentStage>
    </Stack>
  );
};

SmallSize.args = {
  styleVar: 'PRIMARY',
  sizeVar: 'S',
  children: '버튼',
  disabled: false,
  leftSource: <Icon sizeVar='XS' iconSource={EditIcon} />,
};
