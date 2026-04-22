import React from 'react';

import type { Meta, StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Popper from './Popper';
import type { PopperProps } from './Popper.types';
import { Button } from '../Buttons';
import { Modal } from '../Modal';
import { ComponentStage } from '../../styles/Box';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Popper',
  component: Popper,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Popper 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
} satisfies Meta<typeof Popper>;

export default meta;

export const Playground: StoryFn<PopperProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Stack height={'400px'} width={'300px'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Popper {...args}>
          <Popper.Trigger isOpen={isOpen}>
            <Button onClick={handleToggle}>Popper Playground</Button>
          </Popper.Trigger>
          <Popper.Portal>
            <Modal.Container>
              <Modal.Body>팝오버 안에 모달 넣기</Modal.Body>
            </Modal.Container>
          </Popper.Portal>
        </Popper>
      </ComponentStage>
    </Stack>
  );
};

Playground.args = {
  strategy: 'absolute',
  placement: 'bottom',
};

export const AutoPlacement: StoryFn<PopperProps> = (args) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Stack height={'2000px'} width={'600px'} justify={'center'} align={'end'}>
      <ComponentStage>
        <Popper {...args}>
          <Popper.Trigger isOpen={isOpen}>
            <Button onClick={handleToggle}>Popper Playground</Button>
          </Popper.Trigger>
          <Popper.Portal>
            <Modal.Container>
              <Modal.Body>팝오버 안에 모달 넣기</Modal.Body>
            </Modal.Container>
          </Popper.Portal>
        </Popper>
      </ComponentStage>
    </Stack>
  );
};

AutoPlacement.args = {
  strategy: 'absolute',
  offset: 10,
  autoPlacement: {
    autoAlignment: true,
    allowedPlacements: ['top', 'bottom'],
  },
};
