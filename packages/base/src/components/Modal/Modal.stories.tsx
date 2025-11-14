import type { StoryFn } from '@storybook/react';
import { Box, ComponentStage } from '../../styles/Box';
import { Modal, useHandleModal } from './index';
import type { ModalContainerProps, ModalBodyProps } from './Modal.types';
import ModalContainer from './ModalContainer';
import { useState, type ReactNode } from 'react';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { Button } from '../Buttons';

export default {
  title: 'COMPONENTS/Modal',
  component: ModalContainer,
  argTypes: {
    padding: {
      control: { type: 'text' },
      description: 'Modal Body의 padding을 설정합니다. CSS padding 속성 값을 직접 지정할 수 있습니다.',
    },
  },
};

const mockBoxs: ReactNode[] = new Array(20)
  .fill(0)
  .map((_, index) => <Box key={index} width={'100%'} height={'100px'} background={'primary300'} />);

const PrimaryComponent: StoryFn<ModalContainerProps> = (args) => {
  const { removeModal } = useHandleModal();
  const [size, setSize] = useState<ModalContainerProps['sizeVar']>('L');
  return (
    <Modal.Container {...args} sizeVar={size} outsideClick={removeModal} height={900} hasChangeAnimation={true}>
      <Modal.Header>
        <Text typography={'title1_700'}>모달 헤더 영역</Text>
      </Modal.Header>

      <Modal.Body>{mockBoxs.map((box) => box)}</Modal.Body>

      <Modal.Footer>
        <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
        <Button
          styleVar={'SECONDARY'}
          onClick={() => {
            if (size === 'L') {
              setSize('XL');
            } else {
              setSize('L');
            }
          }}
        >
          사이즈 변경
        </Button>
        <Button>버튼</Button>
      </Modal.Footer>
    </Modal.Container>
  );
};

export const Playground: StoryFn<ModalContainerProps> = (args) => {
  const { addModal } = useHandleModal();
  return (
    <>
      <Button onClick={() => addModal(<PrimaryComponent {...args} />)}>open Modal</Button>
    </>
  );
};

export const Primary: StoryFn<ModalContainerProps> = () => {
  return <PrimaryComponent />;
};

export const Body: StoryFn<ModalContainerProps & { padding?: ModalBodyProps['padding'] }> = ({ padding, ...args }) => (
  <Stack height={'500px'}>
    <ComponentStage>
      <Modal.Container {...args} height={500}>
        <Modal.Body padding={padding}>
          <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
        </Modal.Body>
      </Modal.Container>
    </ComponentStage>
  </Stack>
);

export const HeaderBody: StoryFn<ModalContainerProps> = (args) => (
  <Stack height={'500px'}>
    <ComponentStage>
      <Modal.Container {...args} height={500}>
        <Modal.Header>
          <Text typography={'title1_700'}>모달 헤더 영역</Text>
        </Modal.Header>
        <Modal.Body>
          <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
        </Modal.Body>
      </Modal.Container>
    </ComponentStage>
  </Stack>
);

export const BodyFooter: StoryFn<ModalContainerProps> = (args) => (
  <Stack height={'500px'}>
    <ComponentStage>
      <Modal.Container {...args}>
        <Modal.Body>
          <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
        </Modal.Body>
        <Modal.Footer>
          <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
          <Button styleVar={'SECONDARY'}>버튼</Button>
          <Button>버튼</Button>
        </Modal.Footer>
      </Modal.Container>
    </ComponentStage>
  </Stack>
);

export const AllComponents: StoryFn<ModalContainerProps> = (args) => (
  <Stack height={'500px'}>
    <ComponentStage>
      <Modal.Container {...args}>
        <Modal.Header>
          <Text typography={'title1_700'}>모달 해더 영역</Text>
        </Modal.Header>
        <Modal.Top>
          <div style={{ height: '100px', width: '100%', backgroundColor: 'yellow' }}>상단</div>
        </Modal.Top>
        <Modal.Body>
          <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
        </Modal.Body>
        <Modal.Bottom>
          <div style={{ height: '100px', width: '100%', backgroundColor: 'green' }}>하단</div>
        </Modal.Bottom>
        <Modal.Footer>
          <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
          <Button styleVar={'SECONDARY'}>버튼</Button>
          <Button>버튼</Button>
        </Modal.Footer>
      </Modal.Container>
    </ComponentStage>
  </Stack>
);

export const FullScreen: StoryFn<ModalContainerProps> = () => (
  <Stack
    height={'100%'}
    width={'100%'}
    style={{
      position: 'fixed',
      height: '100vh',
      width: '100vw',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    <Modal.Container sizeVar={'FULL'}>
      <Modal.Header>
        <Text typography={'title1_700'}>모달 헤더 영역</Text>
      </Modal.Header>
      <Modal.Body>
        <Stack.Horizontal height={'100%'} width={'100%'}>
          <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
        </Stack.Horizontal>
      </Modal.Body>
      <Modal.Footer>
        <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
        <Button styleVar={'SECONDARY'}>버튼</Button>
        <Button>버튼</Button>
      </Modal.Footer>
    </Modal.Container>
  </Stack>
);
