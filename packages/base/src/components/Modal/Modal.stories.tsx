import type { StoryFn } from '@storybook/react';
import { Box, ComponentStage } from '../../styles/Box';
import { Modal, useHandleModal } from './index';
import type { ModalContainerProps } from './Modal.types';
import ModalContainer from './ModalContainer';
import type { ReactNode } from 'react';
import React from 'react';
import { Text } from '../Text';
import { Stack } from '../Stack';
import { Button } from '../Buttons';
import Tree from '../Tree/Tree';
import { Checkbox } from '../ControlButtons';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { InfoEmployeeIcon } from '@shoplflow/shopl-assets';

export default {
  title: 'COMPONENTS/Modal',
  component: ModalContainer,
};

const mockBoxs: ReactNode[] = new Array(10)
  .fill(0)
  .map((_, index) => <Box key={index} width={'100%'} height={'100px'} background={'primary300'} />);

const PrimaryComponent: StoryFn<ModalContainerProps> = (args) => {
  const { removeModal } = useHandleModal();
  return (
    <Modal.Container {...args} outsideClick={removeModal} height={900}>
      <Modal.Header>
        <Text typography={'title1_700'}>모달 헤더 영역</Text>
      </Modal.Header>

      <Modal.Body>
        <Tree>
          <Tree.Item
            leftSource={<Checkbox />}
            label={'샤플'}
            initialIsOpen
            rightSource={
              <Tag
                styleVar={'TINT'}
                sizeVar={'XS'}
                color={'primary300'}
                leftSource={<Icon iconSource={InfoEmployeeIcon} sizeVar={'XS'} color={'primary300'} />}
              >
                2
              </Tag>
            }
          >
            <Tree.Item
              leftSource={<Checkbox />}
              label={'프론트엔드'}
              initialIsOpen
              rightSource={
                <Tag
                  styleVar={'TINT'}
                  sizeVar={'XS'}
                  color={'green300'}
                  leftSource={<Icon iconSource={InfoEmployeeIcon} sizeVar={'XS'} color={'green300'} />}
                >
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} label={'Kevin'} />
              <Tree.Item leftSource={<Checkbox />} label={'Daisy'} />
              <Tree.Item leftSource={<Checkbox />} label={'Jason'} />
              <Tree.Item leftSource={<Checkbox />} label={'Velo'} />
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              label={'디자인'}
              rightSource={
                <Tag
                  styleVar={'TINT'}
                  sizeVar={'XS'}
                  color={'green300'}
                  leftSource={<Icon iconSource={InfoEmployeeIcon} sizeVar={'XS'} color={'green300'} />}
                >
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} label={'Casper'} />
              <Tree.Item leftSource={<Checkbox />} label={'Jin'} />
              <Tree.Item leftSource={<Checkbox />} label={'Bb'} />
            </Tree.Item>
            <Tree.Item leftSource={<Checkbox />} label={'중첩 테스트'}>
              <Tree.Item leftSource={<Checkbox />} label={'사과'}>
                <Tree.Item leftSource={<Checkbox />} label={'배'}>
                  <Tree.Item leftSource={<Checkbox />} label={'귤'} />
                  <Tree.Item leftSource={<Checkbox />} label={'포도'} />
                </Tree.Item>
                <Tree.Item leftSource={<Checkbox />} label={'포도'} />
              </Tree.Item>
              <Tree.Item leftSource={<Checkbox />} label={'바나나'} />
              <Tree.Item leftSource={<Checkbox />} label={'딸기'} />
            </Tree.Item>
          </Tree.Item>
        </Tree>
        {/*{mockBoxs.map((box) => box)}*/}
      </Modal.Body>

      <Modal.Footer>
        <Text typography={'body1_400'}>버튼이 들어가는 자리에요</Text>
        <Button styleVar={'SECONDARY'}>버튼</Button>
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

export const Primary = () => {
  return <PrimaryComponent />;
};

export const Body: StoryFn<ModalContainerProps> = (args) => (
  <Stack height={'500px'}>
    <ComponentStage>
      <Modal.Container {...args} height={500}>
        <Modal.Body>
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
