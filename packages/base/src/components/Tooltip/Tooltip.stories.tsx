import Tooltip from './Tooltip';
import type { TooltipProps } from './Tooltip.types';
import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { ComponentStage } from '../../styles/Box';
import { Text } from '../Text';

export default {
  title: 'COMPONENTS/Tooltip',
  component: Tooltip,
};

export const Playground: StoryFn<TooltipProps> = ({ trigger, popper, ...args }) => {
  return (
    <Stack.Horizontal width={'700px'} height={'400px'} spacing={'spacing32'}>
      <ComponentStage justify={'start'}>
        <Tooltip trigger={trigger} popper={popper} {...args} />
      </ComponentStage>
    </Stack.Horizontal>
  );
};

Playground.args = {
  trigger: <Text typography='body1_400'>호버 해보세요</Text>,
  popper: (
    <Tooltip.Content content='안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~안녕하세요~ 만나서 반갑습니다~' />
  ),
  placement: 'bottom-start',
};
