import { Stack } from '@shoplflow/base';
import type { ExampleProps } from './Example.types';

const Example = ({ text }: ExampleProps) => {
  return (
    <Stack.Horizontal>
      <div>{text}</div>
    </Stack.Horizontal>
  );
};

export default Example;
