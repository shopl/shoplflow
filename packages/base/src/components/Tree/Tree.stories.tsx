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
              initialIsOpen
              text={'샤플'}
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
                text={'프론트엔드'}
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
                <Tree.Item leftSource={<Checkbox />} text={'Kevin'} />
                <Tree.Item leftSource={<Checkbox />} text={'Daisy'} />
                <Tree.Item leftSource={<Checkbox />} text={'Jason'} />
                <Tree.Item leftSource={<Checkbox />} text={'Velo'} />
              </Tree.Item>
              <Tree.Item
                leftSource={<Checkbox />}
                text={'디자인'}
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
                <Tree.Item leftSource={<Checkbox />} text={'Casper'} />
                <Tree.Item leftSource={<Checkbox />} text={'Jin'} />
                <Tree.Item leftSource={<Checkbox />} text={'Bb'} />
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
            <Tree.Item
              leftSource={<Checkbox />}
              text={'서울시'}
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
                <Tree.Item leftSource={<Checkbox />} text={item} key={item} />
              ))}
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              text={'디자인'}
              rightSource={
                <Tag styleVar={'TINT'} sizeVar={'XS'} color={'yellow300'}>
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} text={'Figma'} />
              <Tree.Item leftSource={<Checkbox />} text={'Zeplin'} />
              <Tree.Item leftSource={<Checkbox />} text={'Sketch'} />
              <Tree.Item leftSource={<Checkbox />} text={'Adobe XD'} />
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              text={'IDE'}
              rightSource={
                <Tag styleVar={'TINT'} sizeVar={'XS'} color={'primary300'}>
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} text={'VSCode'} />
              <Tree.Item leftSource={<Checkbox />} text={'WebStorm'} />
              <Tree.Item leftSource={<Checkbox />} text={'IntelliJ'} />
              <Tree.Item leftSource={<Checkbox />} text={'Eclipse'} />
            </Tree.Item>
          </Tree>
        </ScrollArea>
      </ComponentStage>
    </Stack>
  );
};
