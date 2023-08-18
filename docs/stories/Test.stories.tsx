import React from 'react';
import { Button } from '@shoplflow/base';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'COMPONENTS/Button',
} as Meta;

export const Playground: StoryFn<typeof Button> = () => {
  return (
    <div>
      <Button />
    </div>
  );
};
