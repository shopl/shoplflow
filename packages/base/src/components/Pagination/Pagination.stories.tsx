import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite';
import { Stack } from '../Stack';
import { Text } from '../Text';
import Pagination from './Pagination';
import type { PaginationProps } from './Pagination.types';
import { Button } from '../Buttons';
import PaginationSizeSelector from './PaginationSizeSelector';

/**
 * 스토리에서만 `getDomain()`이 읽는 dataset을 고정한다.
 * 미리보기의 `ShoplflowProvider`가 `useEffect`로 dataset을 덮어쓰므로, 같은 틱에서 나중에 실행되도록
 * `setTimeout(0)`으로 적용하고, `Pagination`이 `getDomain()`을 다시 읽도록 리렌더를 한 번 더 일으킨다.
 */
/** Shopl(`shopl`) dataset만 스토리에서 고정한다. */
const ShoplDomainForStory = ({ children }: { children: ReactNode }) => {
  const [, setRerender] = useState(0);

  useEffect(() => {
    const prev = document.documentElement.dataset.shoplflow;

    const timer = window.setTimeout(() => {
      document.documentElement.dataset.shoplflow = 'shopl';
      setRerender((n) => n + 1);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      if (prev === undefined) {
        delete document.documentElement.dataset.shoplflow;
      } else {
        document.documentElement.dataset.shoplflow = prev;
      }
      setRerender((n) => n + 1);
    };
  }, []);

  return <>{children}</>;
};

const meta = {
  title: 'COMPONENTS/Pagination',
  component: Pagination,
  argTypes: {
    sizeVar: {
      control: { type: 'select' },
      options: ['S', 'XS'],
      description: 'S: 기본 · XS: 첫/끝 페이지 버튼 숨김, 더 작은 터치 영역',
    },
  },
  args: {
    sizeVar: 'S',
  },
} satisfies Meta<typeof Pagination>;

export default meta;

export const Playground: StoryFn<PaginationProps> = (args) => {
  const itemsTotalCount = 86;

  const [pageSize, setPageSize] = useState('20');
  const [currentPage, setCurrentPage] = useState(0);

  const pageSizeList = new Array(10).fill(0).map((_, index) => {
    return {
      label: `${index + 1}0`,
      value: `${index + 1}0`,
    };
  });

  return (
    <Stack width='900px'>
      <Pagination
        {...args}
        currentPage={currentPage}
        previousPage={() => setCurrentPage((prev) => prev - 1)}
        pageSize={pageSize}
        pageCount={5}
        nextPage={() => setCurrentPage((prev) => prev + 1)}
        itemsTotalCount={itemsTotalCount}
        gotoPage={(page) => setCurrentPage(page)}
        leftSource={
          <Stack.Horizontal>
            <Button styleVar='GHOST' sizeVar='S'>
              leftSource
            </Button>
            <Button styleVar='PRIMARY' sizeVar='S'>
              leftSource
            </Button>
          </Stack.Horizontal>
        }
        rightSource={
          <PaginationSizeSelector
            data={pageSizeList}
            pageSize={pageSize}
            setPageSize={(value) => {
              setCurrentPage(0);
              setPageSize(value);
            }}
          />
        }
      />
    </Stack>
  );
};

const itemsTotalForLayoutStories = 500;

/** `Pagination`의 leftSource / rightSource에 넣을 프리셋(Controls 문자열 → ReactNode) */
type LeftSourcePreset = 'none' | 'wide' | 'buttons' | 'many';
type RightSourcePreset = 'none' | 'text' | 'buttons' | 'many';

type LayoutVerificationStoryArgs = {
  /** leftSource prop에 전달할 콘텐츠 프리셋 */
  leftSource: LeftSourcePreset;
  /** rightSource prop에 전달할 콘텐츠 프리셋 */
  rightSource: RightSourcePreset;
  sizeVar: 'S' | 'XS';
};

const renderLeftSourcePreset = (preset: LeftSourcePreset): ReactNode | undefined => {
  if (preset === 'none') {
    return undefined;
  }
  if (preset === 'wide') {
    return (
      <div
        style={{
          minWidth: 280,
          padding: '8px 12px',
          borderRadius: 6,
          background: 'var(--neutral100)',
        }}
      >
        <Text typography='caption_400'>넓은 블록 (텍스트·박스)</Text>
      </div>
    );
  }
  if (preset === 'buttons') {
    return (
      <Stack.Horizontal spacing='spacing04' align='center'>
        <Button styleVar='GHOST' sizeVar='S'>
          Button
        </Button>
        <Button styleVar='GHOST' sizeVar='S'>
          Button
        </Button>
      </Stack.Horizontal>
    );
  }
  return (
    <Stack.Horizontal spacing='spacing04' align='center'>
      <Button styleVar='GHOST' sizeVar='S'>
        L1
      </Button>
      <Button styleVar='GHOST' sizeVar='S'>
        L2
      </Button>
      <Button styleVar='PRIMARY' sizeVar='S'>
        L3
      </Button>
    </Stack.Horizontal>
  );
};

const renderRightSourcePreset = (preset: RightSourcePreset): ReactNode | undefined => {
  if (preset === 'none') {
    return undefined;
  }
  if (preset === 'text') {
    return (
      <Text typography='body2_400' color='neutral600'>
        짧은 텍스트
      </Text>
    );
  }
  if (preset === 'buttons') {
    return (
      <Stack.Horizontal spacing='spacing04' align='center'>
        <Button styleVar='GHOST' sizeVar='S'>
          취소
        </Button>
        <Button styleVar='PRIMARY' sizeVar='S'>
          확인
        </Button>
      </Stack.Horizontal>
    );
  }
  return (
    <Stack.Horizontal spacing='spacing04' align='center'>
      <Text typography='caption_400' color='neutral600'>
        R1
      </Text>
      <Text typography='caption_400' color='neutral600'>
        R2
      </Text>
      <Button styleVar='GHOST' sizeVar='S'>
        R3
      </Button>
    </Stack.Horizontal>
  );
};

/** left/right 너비와 무관하게 페이지 네비가 가운데 오는지 확인 (Shopl 전용, dataset `shopl` 고정) */
export const LayoutVerification: StoryObj<LayoutVerificationStoryArgs> = {
  render: function LayoutVerificationRender(args) {
    const [currentPage, setCurrentPage] = useState(0);
    const pageSize = '20';

    return (
      <ShoplDomainForStory>
        <Stack width='960px' spacing='spacing12'>
          <Text typography='body2_400' color='neutral500'>
            Controls의 leftSource / rightSource 프리셋으로 `Pagination`의 동일 prop에 넣을 예시를 바꿉니다. wide·텍스트·
            Button만·복합(many) 등으로 가운데 정렬이 유지되는지 확인하세요. (dataset shopl 고정)
          </Text>
          <div
            style={{
              width: '100%',
              padding: 12,
              borderRadius: 8,
              border: '1px dashed var(--neutral300)',
              boxSizing: 'border-box',
            }}
          >
            <Pagination
              sizeVar={args.sizeVar}
              currentPage={currentPage}
              pageSize={pageSize}
              pageCount={5}
              itemsTotalCount={itemsTotalForLayoutStories}
              previousPage={() => setCurrentPage((p) => Math.max(0, p - 1))}
              nextPage={() => setCurrentPage((p) => p + 1)}
              gotoPage={(page) => setCurrentPage(typeof page === 'function' ? page(currentPage) : page)}
              leftSource={renderLeftSourcePreset(args.leftSource)}
              rightSource={renderRightSourcePreset(args.rightSource)}
            />
          </div>
        </Stack>
      </ShoplDomainForStory>
    );
  },
  args: {
    leftSource: 'wide',
    rightSource: 'text',
    sizeVar: 'S',
  },
  argTypes: {
    sizeVar: {
      control: { type: 'select' },
      options: ['S', 'XS'],
      description: 'Pagination 컨트롤 크기',
      table: { category: 'Pagination' },
    },
    leftSource: {
      name: 'leftSource',
      control: { type: 'select' },
      options: ['none', 'wide', 'buttons', 'many'],
      description:
        '→ Pagination `leftSource`에 넣을 예시. none: 없음 · wide: 넓은 박스 · buttons: Ghost Button 2개 · many: 버튼 3개',
      table: { category: 'Layout 검증' },
    },
    rightSource: {
      name: 'rightSource',
      control: { type: 'select' },
      options: ['none', 'text', 'buttons', 'many'],
      description:
        '→ Pagination `rightSource`에 넣을 예시. none: 없음 · text: 짧은 텍스트 · buttons: 취소/확인 Button · many: 텍스트+Button 혼합',
      table: { category: 'Layout 검증' },
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '`getDomain() === shopl`일 때 가운데 정렬을 확인합니다. dataset `shopl` 고정. Controls의 leftSource·rightSource는 실제 prop 이름과 동일하며, 프리셋 문자열만 바꿉니다.',
      },
    },
  },
};
