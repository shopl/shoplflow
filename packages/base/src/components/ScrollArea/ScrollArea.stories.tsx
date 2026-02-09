import React from 'react';

import type { StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import ScrollArea from './ScrollArea';
import type { ScrollAreaProps } from './ScrollArea.types';
import { Box, ComponentStage } from '../../styles/Box';

export default {
  title: 'COMPONENTS/ScrollArea',
  component: ScrollArea,
};

export const Playground: StoryFn<ScrollAreaProps> = (args) => {
  const test = Array.from({ length: 100 }, (_, i) => i);
  return (
    <Stack height={'600px'} width={'500px'}>
      <ComponentStage>
        <ScrollArea {...args}>
          {test.map((item) => (
            <Box key={item} width={'100%'} height={'60px'} background={'primary300'} />
          ))}
        </ScrollArea>
      </ComponentStage>
    </Stack>
  );
};
