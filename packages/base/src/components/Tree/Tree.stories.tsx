import React from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Tree from './Tree';
import type { TreeProps } from './Tree.types';
import { ComponentStage } from '../../styles/Box';
import { Checkbox } from '../ControlButtons';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { InfoEmployeeIcon } from '@shoplflow/shopl-assets';
import { 서울시_구_목록 } from './mock/서울시_구_목록';
import { ScrollArea } from '../ScrollArea';
export default {
  title: 'COMPONENTS/Tree',
  component: Tree,
};

export const Playground: StoryFn<TreeProps> = () => {
  return (
    <Stack width={'500px'} height={'500px'}>
      <ComponentStage>
        <ScrollArea>
          <Tree>
            <Tree.Item
              leftSource={<Checkbox />}
              content={'샤플'}
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
                content={'프론트엔드'}
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
                <Tree.Item leftSource={<Checkbox />} content={'Kevin'} />
                <Tree.Item leftSource={<Checkbox />} content={'Daisy'} />
                <Tree.Item leftSource={<Checkbox />} content={'Jason'} />
                <Tree.Item leftSource={<Checkbox />} content={'Velo'} />
              </Tree.Item>
              <Tree.Item
                leftSource={<Checkbox />}
                content={'디자인'}
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
                <Tree.Item leftSource={<Checkbox />} content={'Casper'} />
                <Tree.Item leftSource={<Checkbox />} content={'Jin'} />
                <Tree.Item leftSource={<Checkbox />} content={'Bb'} />
              </Tree.Item>
              <Tree.Item leftSource={<Checkbox />} content={'중첩 테스트'}>
                <Tree.Item leftSource={<Checkbox />} content={'사과'}>
                  <Tree.Item leftSource={<Checkbox />} content={'배'}>
                    <Tree.Item leftSource={<Checkbox />} content={'귤'} />
                    <Tree.Item leftSource={<Checkbox />} content={'포도'} />
                  </Tree.Item>
                  <Tree.Item leftSource={<Checkbox />} content={'포도'} />
                </Tree.Item>
                <Tree.Item leftSource={<Checkbox />} content={'바나나'} />
                <Tree.Item leftSource={<Checkbox />} content={'딸기'} />
              </Tree.Item>
            </Tree.Item>
          </Tree>
        </ScrollArea>
      </ComponentStage>
    </Stack>
  );
};

export const WithScrollArea: StoryFn<TreeProps> = () => {
  return (
    <Stack width={'500px'} height={'300px'}>
      <ComponentStage>
        <ScrollArea>
          <Tree>
            <Tree.Item leftSource={<Checkbox />} content={'과일'}>
              <Tree.Item leftSource={<Checkbox />} content={'사과'}>
                <Tree.Item leftSource={<Checkbox />} content={'후지'} />
                <Tree.Item leftSource={<Checkbox />} content={'청포도'} />
              </Tree.Item>
              <Tree.Item leftSource={<Checkbox />} content={'바나나'} />
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              content={'서울시'}
              rightSource={
                <Tag
                  styleVar={'TINT'}
                  sizeVar={'XS'}
                  color={'yellow300'}
                  leftSource={<Icon iconSource={InfoEmployeeIcon} sizeVar={'XS'} color={'yellow300'} />}
                >
                  {서울시_구_목록.length}
                </Tag>
              }
            >
              {서울시_구_목록.map((item) => (
                <Tree.Item leftSource={<Checkbox />} content={item} key={item} />
              ))}
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              content={'디자인'}
              rightSource={
                <Tag styleVar={'TINT'} sizeVar={'XS'} color={'yellow300'}>
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} content={'Figma'} />
              <Tree.Item leftSource={<Checkbox />} content={'Zeplin'} />
              <Tree.Item leftSource={<Checkbox />} content={'Sketch'} />
              <Tree.Item leftSource={<Checkbox />} content={'Adobe XD'} />
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              content={'IDE'}
              rightSource={
                <Tag styleVar={'TINT'} sizeVar={'XS'} color={'primary300'}>
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} content={'VSCode'} />
              <Tree.Item leftSource={<Checkbox />} content={'WebStorm'} />
              <Tree.Item leftSource={<Checkbox />} content={'IntelliJ'} />
              <Tree.Item leftSource={<Checkbox />} content={'Eclipse'} />
            </Tree.Item>
          </Tree>
        </ScrollArea>
      </ComponentStage>
    </Stack>
  );
};
