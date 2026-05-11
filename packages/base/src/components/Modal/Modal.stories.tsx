import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { Box, ComponentStage } from '../../styles/Box';
import { Modal, ModalSize, useHandleModal } from './index';
import type { ModalContainerProps } from './Modal.types';
import ModalContainer from './ModalContainer';
import { useState, type ReactNode } from 'react';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { Button } from '../Buttons';
import { colorTokens } from '../../styles';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';
import { StackContainer } from '../StackContainer';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Modal',
  component: ModalContainer,
  args: {
    /** 생략 시 스타일 너비는 M과 동일; Controls 초기값은 M으로 맞춤 */
    sizeVar: 'M',
  },
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Modal 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
  argTypes: {
    padding: {
      control: { type: 'text' },
      description: 'Modal Body의 padding을 설정합니다. CSS padding 속성 값을 직접 지정할 수 있습니다.',
    },
    sizeVar: {
      control: { type: 'select' },
      options: Object.values(ModalSize),
      description: 'Modal 사이즈입니다. prop을 넘기지 않으면 M(640px)',
      table: {
        type: { summary: Object.values(ModalSize).join(' | ') },
      },
    },
  },
} satisfies Meta<typeof ModalContainer>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockBoxs: ReactNode[] = new Array(20)
  .fill(0)
  .map((_, index) => <Box key={index} width={'100%'} height={'100px'} background={'primary300'} />);

const PrimaryComponent = (args: ModalContainerProps) => {
  const { removeModal } = useHandleModal();
  const [size, setSize] = useState<ModalContainerProps['sizeVar']>(args.sizeVar);

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
      <Button onClick={() => addModal(<PrimaryComponent {...args} />)}>Modal 열기</Button>
    </>
  );
};

const TestModalTopComponent = () => {
  const [topHeight, setTopHeight] = useState<number>(80);
  return (
    <Modal.Top>
      <div style={{ height: `${topHeight}px`, width: '100%', backgroundColor: colorTokens.primary100 }}>Modal.Top</div>
      <Button
        sizeVar={'XS'}
        onClick={() => {
          if (topHeight === 80) {
            setTopHeight(160);
          } else {
            setTopHeight(80);
          }
        }}
      >
        Top Height: {topHeight}px
      </Button>
    </Modal.Top>
  );
};

export const AllComponents: StoryFn<ModalContainerProps> = (args) => {
  const { addModal, removeModal } = useHandleModal();

  const handleOpenModal = () => {
    addModal(
      <Modal.Container {...args} height={720}>
        <Modal.Header>
          <Text typography={'title1_700'}>모달 Header 영역</Text>
        </Modal.Header>
        <TestModalTopComponent />
        <Modal.Body>
          <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
        </Modal.Body>
        <Modal.Bottom>
          <StackContainer height={'100px'} width={'100%'} background={'primary100'}>
            <Text>모달 Bottom 영역</Text>
          </StackContainer>
        </Modal.Bottom>
        <Modal.Footer>
          <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
          <Button styleVar={'SECONDARY'} onClick={() => removeModal()}>
            닫기
          </Button>
          <Button>버튼</Button>
        </Modal.Footer>
      </Modal.Container>,
    );
  };

  return (
    <ComponentStage>
      <Button onClick={handleOpenModal}>모든 컴포넌트 요소 Modal 열기</Button>
    </ComponentStage>
  );
};

export const Height100Percent: Story = {
  render: () => {
    const { addModal, removeModal } = useHandleModal();
    return (
      <ComponentStage>
        <Button
          onClick={() =>
            addModal(
              <Modal.Container sizeVar={'L'} height={'100%'} outsideClick={removeModal}>
                <Modal.Header>
                  <Text typography={'title1_700'}>모달 헤더 영역</Text>
                </Modal.Header>
                <Modal.Body>
                  <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
                </Modal.Body>
                <Modal.Footer>
                  <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
                  <Button styleVar={'SECONDARY'}>버튼</Button>
                  <Button>버튼</Button>
                </Modal.Footer>
              </Modal.Container>,
            )
          }
        >
          Height100Percent Modal 열기
        </Button>
      </ComponentStage>
    );
  },
};

export const FullScreen: Story = {
  render: () => {
    const { addModal, removeModal } = useHandleModal();
    return (
      <ComponentStage>
        <Button
          onClick={() =>
            addModal(
              <Modal.Container sizeVar={'FULL'} outsideClick={removeModal}>
                <Modal.Header>
                  <Text typography={'title1_700'}>모달 헤더 영역</Text>
                </Modal.Header>
                <Modal.Body>
                  <StackContainer height={'100%'} width={'100%'} background={'neutral200'}>
                    <Stack.Vertical>{mockBoxs.map((box) => box)}</Stack.Vertical>
                  </StackContainer>
                </Modal.Body>
                <Modal.Footer>
                  <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
                  <Button styleVar={'SECONDARY'}>버튼</Button>
                  <Button>버튼</Button>
                </Modal.Footer>
              </Modal.Container>,
            )
          }
        >
          FullScreen Modal 열기
        </Button>
      </ComponentStage>
    );
  },
};
