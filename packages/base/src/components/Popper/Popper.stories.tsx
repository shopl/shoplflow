import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Popper from './Popper';
import type { PopperProps } from './Popper.types';
import { Button } from '../Buttons';
import { Modal } from '../Modal';
import { ComponentStage } from '../../styles/Box';

export default {
  title: 'COMPONENTS/Popper',
  component: Popper,
};

export const Playground: StoryFn<PopperProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Stack height={'400px'} width={'300px'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Popper
          isOpen={isOpen}
          {...args}
          trigger={<Button onClick={handleToggle}>Popper Playground</Button>}
          popper={
            <Modal.Container>
              <Modal.Body>팝오버 안에 모달 넣기</Modal.Body>
            </Modal.Container>
          }
        />
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  strategy: 'absolute',
  autoPlacement: false,
  placement: 'bottom',
};

export const AutoPlacement: StoryFn<PopperProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Stack height={'400px'} width={'300px'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Popper
          isOpen={isOpen}
          {...args}
          trigger={<Button onClick={handleToggle}>Popper Playground</Button>}
          popper={
            <Modal.Container>
              <Modal.Body>팝오버 안에 모달 넣기</Modal.Body>
            </Modal.Container>
          }
        />
      </ComponentStage>
    </Stack>
  );
};

AutoPlacement.args = {
  strategy: 'absolute',
  isOpen: false,
  autoPlacement: true,
  alignment: 'start',
};
