import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Tree from './Tree';
import { ComponentStage } from '../../styles/Box';
import { Checkbox } from '../ControlButtons';
import { Tag } from '../Tag';
import { Icon } from '../Icon';
import { InfoEmployeeIcon } from '@shoplflow/shopl-assets';
import { 서울시_구_목록 } from './mock/서울시_구_목록';
import { ScrollArea } from '../ScrollArea';
import { buildComponentDocsMarkdown, getLatestComponentVersion, type ComponentChangelogEntry } from '@shoplflow/utils';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const COMPONENT_CHANGELOG: ComponentChangelogEntry[] = [
  { version: '1.0', date: '2026-04-22', changes: ['Storybook Docs에 버전·Changelog 섹션 추가'] },
];

const meta = {
  title: 'COMPONENTS/Tree',
  component: Tree,
  parameters: {
    version: getLatestComponentVersion(COMPONENT_CHANGELOG),
    docs: {
      description: {
        component: buildComponentDocsMarkdown({
          summary: 'Tree 컴포넌트입니다.',
          changelog: COMPONENT_CHANGELOG,
        }),
      },
    },
  },
} satisfies Meta<typeof Tree>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: () => {
    return (
      <Stack width={'500px'} height={'500px'}>
        <ComponentStage>
          <ScrollArea>
            <Tree>
              <Tree.Item
                leftSource={<Checkbox />}
                label={'샤플앤컴퍼니'}
                initialIsOpen
                rightSource={
                  <Tag
                    styleVar={'TINT'}
                    sizeVar={'XS'}
                    color={'shopl300'}
                    leftSource={<Icon iconSource={InfoEmployeeIcon} sizeVar={'XS'} color={'shopl300'} />}
                  >
                    9
                  </Tag>
                }
              >
                <Tree.Item
                  leftSource={<Checkbox />}
                  label={
                    '프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트프로덕트'
                  }
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
                  <Tree.Item leftSource={<Checkbox />} label={'기획'} />
                  <Tree.Item leftSource={<Checkbox />} label={'개발'} />
                  <Tree.Item leftSource={<Checkbox />} label={'운영'} />
                  <Tree.Item leftSource={<Checkbox />} label={'QA'} />
                </Tree.Item>
                <Tree.Item
                  leftSource={<Checkbox />}
                  label={'비즈니스'}
                  rightSource={
                    <Tag
                      styleVar={'TINT'}
                      sizeVar={'XS'}
                      color={'green300'}
                      leftSource={<Icon iconSource={InfoEmployeeIcon} sizeVar={'XS'} color={'green300'} />}
                    >
                      3
                    </Tag>
                  }
                >
                  <Tree.Item leftSource={<Checkbox />} label={'마케팅'} />
                  <Tree.Item leftSource={<Checkbox />} label={'영업'} />
                  <Tree.Item leftSource={<Checkbox />} label={'경영지원'} />
                </Tree.Item>
                <Tree.Item leftSource={<Checkbox />} label={'디자인'} />
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
              <Tree.Item disabled leftSource={<Checkbox />} label={'비활성화 테스트'}>
                <Tree.Item disabled leftSource={<Checkbox />} label={'비활성화된 item'} />
              </Tree.Item>
              <Tree.Item leftSource={<Checkbox />} label={'단독 트리 + 체크 박스'} />
              <Tree.Item label={'단독 트리'} />
            </Tree>
          </ScrollArea>
        </ComponentStage>
      </Stack>
    );
  },
};

export const WithScrollArea: Story = {
  render: () => (
    <Stack width={'500px'} height={'300px'}>
      <ComponentStage>
        <ScrollArea>
          <Tree>
            <Tree.Item leftSource={<Checkbox />} label={'과일'}>
              <Tree.Item leftSource={<Checkbox />} label={'사과'}>
                <Tree.Item leftSource={<Checkbox />} label={'후지'} />
                <Tree.Item leftSource={<Checkbox />} label={'청포도'} />
              </Tree.Item>
              <Tree.Item leftSource={<Checkbox />} label={'바나나'} />
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              label={'서울시'}
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
                <Tree.Item leftSource={<Checkbox />} label={item} key={item} />
              ))}
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              label={'디자인'}
              rightSource={
                <Tag styleVar={'TINT'} sizeVar={'XS'} color={'yellow300'}>
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} label={'Figma'} />
              <Tree.Item leftSource={<Checkbox />} label={'Zeplin'} />
              <Tree.Item leftSource={<Checkbox />} label={'Sketch'} />
              <Tree.Item leftSource={<Checkbox />} label={'Adobe XD'} />
            </Tree.Item>
            <Tree.Item
              leftSource={<Checkbox />}
              label={'IDE'}
              rightSource={
                <Tag styleVar={'TINT'} sizeVar={'XS'} color={'primary300'}>
                  4
                </Tag>
              }
            >
              <Tree.Item leftSource={<Checkbox />} label={'VSCode'} />
              <Tree.Item leftSource={<Checkbox />} label={'WebStorm'} />
              <Tree.Item leftSource={<Checkbox />} label={'IntelliJ'} />
              <Tree.Item leftSource={<Checkbox />} label={'Eclipse'} />
            </Tree.Item>
          </Tree>
        </ScrollArea>
      </ComponentStage>
    </Stack>
  ),
};
