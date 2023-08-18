// import { useTheme } from '@emotion/react';
import { Button } from '@shoplflow/base';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'COMPONENTS/Button',
} as Meta;

export const Playground: StoryFn<typeof Button> = () => {
  // const theme = useTheme();
  // console.log('theme in storybook ::::: ', theme);

  return (
    <div>
      <Button />
    </div>
  );
};
