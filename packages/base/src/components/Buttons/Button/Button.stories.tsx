import type { Meta, StoryObj } from '@storybook/react-vite';
import Button from './Button';
import { ButtonSizeVariants, ButtonStyleVariants } from './Button.types';
import { colorTokens } from '../../../styles';
import { Icon } from '../../../components/Icon';
import { EditIcon } from '@shoplflow/shopl-assets';

const FIGMA_URL = 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=13719-16537&m=dev';

/** 컴포넌트별 변경 이력 (최신이 위). 스토리 Docs에 표시됩니다. */
const BUTTON_CHANGELOG: Array<{ version: string; date: string; changes: string[] }> = [
  {
    version: '2.1',
    date: '2026-03-10',
    changes: ['small size button 좌우 패딩을 10으로 수정'],
  },
  {
    version: '2.0',
    date: '2024-01',
    changes: ['스타일 변형(PRIMARY, SECONDARY, GHOST, SOLID), 사이즈(XS, S, M), 로딩/비활성 상태 지원'],
  },
];

const latestVersion = BUTTON_CHANGELOG?.[0]?.version;

const meta = {
  title: 'COMPONENTS/Buttons/Button',
  component: Button,
  parameters: {
    version: latestVersion,
    design: {
      type: 'figma',
      url: FIGMA_URL,
    },
    docs: {
      description: {
        component: [
          `**Version:** \`${latestVersion}\``,
          '',
          '기본 버튼 컴포넌트입니다. 스타일 변형(styleVar), 사이즈(sizeVar), 로딩/비활성 상태를 지원합니다.',
          '',
          '### Changelog',
          ...BUTTON_CHANGELOG.flatMap(({ version, date, changes }) => [
            `- **${version}** (${date})`,
            ...changes.map((c) => `  - ${c}`),
          ]),
        ].join('\n'),
      },
    },
  },
  argTypes: {
    styleVar: {
      options: Object.values(ButtonStyleVariants),
      control: { type: 'select' },
      description: '버튼의 스타일을 설정합니다. SOLID를 선택할 경우 color 속성도 지정해주셔야 합니다.',
      defaultValue: 'PRIMARY',
    },
    sizeVar: {
      options: Object.values(ButtonSizeVariants),
      control: { type: 'select' },
      description: '버튼의 사이즈를 선택합니다.',
      defaultValue: 'M',
    },
    color: {
      description: 'styleVar가 SOLID일 때의 버튼의 배경 색상을 선택합니다.',
      options: Object.keys(colorTokens),
      control: { type: 'select' },
      defaultValue: 'coolgray200',
    },
    as: {
      description: '컴포넌트의 HTML 요소를 변경할 수 있습니다. (기본값: button)',
    },
    isLoading: {
      control: { type: 'boolean' },
      description: 'Spinner가 노출되는 로딩 상태 여부를 설정합니다.',
      defaultValue: false,
    },
    children: {
      description:
        '버튼 내부에 들어가는 요소로, 기본적으로 `string` 타입을 지원하나 필요에 따라 `React.ReactNode` 타입의 요소를 자유롭게 넣을 수 있습니다.',
    },
    disabled: {
      description: '버튼의 비활성화 여부를 설정합니다.',
    },
    onClick: {
      description: '버튼을 클릭했을 때 실행되는 동작을 설정합니다.',
      action: 'clicked',
    },
    lineClamp: {
      description: '버튼 내부의 콘텐츠를 지정한 줄 수만큼 제한합니다.',
      control: { type: 'number' },
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

const flexWrap = { display: 'flex', gap: 16, flexWrap: 'wrap' as const, alignItems: 'center' };

export const Playground: Story = {
  args: {
    styleVar: 'PRIMARY',
    sizeVar: 'M',
    children: 'Button',
    disabled: false,
  },
  parameters: {},
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: 'Button' });
    await userEvent.click(button);
  },
};

export const Variants: Story = {
  render: (args) => (
    <div style={flexWrap}>
      <Button {...args} styleVar='PRIMARY' title='PRIMARY'>
        Primary
      </Button>
      <Button {...args} styleVar='SECONDARY' title='SECONDARY'>
        Secondary
      </Button>
      <Button {...args} styleVar='GHOST' title='GHOST'>
        Ghost
      </Button>
      <Button {...args} styleVar='SOLID' color='neutral300' title='SOLID'>
        Solid
      </Button>
    </div>
  ),
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=310-5141&m=dev',
    },
  },
  play: async ({ canvas, userEvent, step }) => {
    const getVariantButtons = () => ({
      primary: canvas.getByRole('button', { name: 'Primary' }),
      secondary: canvas.getByRole('button', { name: 'Secondary' }),
      ghost: canvas.getByRole('button', { name: 'Ghost' }),
      solid: canvas.getByRole('button', { name: 'Solid' }),
    });

    await step('렌더링 확인', async () => {
      const { primary, secondary, ghost, solid } = getVariantButtons();
      if (!primary || !secondary || !ghost || !solid) {
        throw new Error('Variants: Primary, Secondary, Ghost, Solid 네 버튼이 모두 렌더되어야 합니다.');
      }
      await Promise.resolve();
    });

    await step('클릭 확인', async () => {
      const { primary, secondary, ghost, solid } = getVariantButtons();
      await userEvent.click(primary);
      await userEvent.click(secondary);
      await userEvent.click(ghost);
      await userEvent.click(solid);
    });

    await step('Variants 별 style 확인 (Background, border)', async () => {
      const { primary, secondary, ghost, solid } = getVariantButtons();
      const isTransparent = (v: string) =>
        v === 'transparent' || v === 'rgba(0, 0, 0, 0)' || v.startsWith('rgba(0, 0, 0, 0)');
      const expectBorder = (el: HTMLElement, variant: string) => {
        const st = window.getComputedStyle(el);
        if (st.borderWidth !== '1px') {
          throw new Error(`Variants: ${variant} border-width 1px 여야 합니다. (실제: ${st.borderWidth})`);
        }
        if (st.borderStyle !== 'solid') {
          throw new Error(`Variants: ${variant} border-style solid 여야 합니다. (실제: ${st.borderStyle})`);
        }
      };
      const expectGhostStyle = (el: HTMLElement) => {
        const st = window.getComputedStyle(el);
        if (!isTransparent(st.backgroundColor)) {
          throw new Error(`Variants: GHOST background transparent 여야 합니다. (실제: ${st.backgroundColor})`);
        }
        if (!isTransparent(st.borderColor)) {
          throw new Error(`Variants: GHOST border transparent 여야 합니다. (실제: ${st.borderColor})`);
        }
      };
      const expectFilledStyle = (el: HTMLElement, variant: string) => {
        const st = window.getComputedStyle(el);
        if (isTransparent(st.backgroundColor)) {
          throw new Error(`Variants: ${variant} background 채워져 있어야 합니다. (실제: ${st.backgroundColor})`);
        }
        if (isTransparent(st.borderColor)) {
          throw new Error(`Variants: ${variant} border 색상이 있어야 합니다. (실제: ${st.borderColor})`);
        }
      };
      expectBorder(primary, 'PRIMARY');
      expectBorder(secondary, 'SECONDARY');
      expectBorder(ghost, 'GHOST');
      expectBorder(solid, 'SOLID');
      expectFilledStyle(primary, 'PRIMARY');
      expectFilledStyle(secondary, 'SECONDARY');
      expectGhostStyle(ghost);
      expectFilledStyle(solid, 'SOLID');
      await Promise.resolve();
    });
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={flexWrap}>
      <Button {...args} sizeVar='XS' title='XS'>
        XS
      </Button>
      <Button {...args} sizeVar='S' title='S'>
        S
      </Button>
      <Button {...args} sizeVar='M' title='M'>
        M
      </Button>
    </div>
  ),
  play: async ({ canvas, step }) => {
    const getButtons = () => ({
      xs: canvas.getByRole('button', { name: 'XS' }),
      s: canvas.getByRole('button', { name: 'S' }),
      m: canvas.getByRole('button', { name: 'M' }),
    });

    await step('Height 확인 (M: 40px, S: 32px, XS: 24px)', async () => {
      const { xs, s, m } = getButtons();
      const expectMinHeight = (el: HTMLElement, size: string, expected: string) => {
        const minHeight = window.getComputedStyle(el).minHeight;
        if (minHeight !== expected) {
          throw new Error(`Sizes: ${size} min-height ${expected} 여야 합니다. (실제: ${minHeight})`);
        }
      };
      expectMinHeight(xs, 'XS', '24px');
      expectMinHeight(s, 'S', '32px');
      expectMinHeight(m, 'M', '40px');
      await Promise.resolve();
    });

    await step('Gap 확인 (M: 4px, S: 2px, XS: 2px)', async () => {
      const { xs, s, m } = getButtons();
      const expectGap = (el: HTMLElement, size: string, expected: string) => {
        const gap = window.getComputedStyle(el).gap;
        if (gap !== expected) {
          throw new Error(`Sizes: ${size} gap ${expected} 여야 합니다. (실제: ${gap})`);
        }
      };
      expectGap(m, 'M', '4px');
      expectGap(s, 'S', '2px');
      expectGap(xs, 'XS', '2px');
      await Promise.resolve();
    });

    await step('Radius 확인 (M: 6px, S: 6px, XS: 6px)', async () => {
      const { xs, s, m } = getButtons();
      const expectRadius = (el: HTMLElement, size: string) => {
        const r = window.getComputedStyle(el).borderRadius;
        if (r !== '6px') {
          throw new Error(`Sizes: ${size} border-radius 6px 여야 합니다. (실제: ${r})`);
        }
      };
      expectRadius(xs, 'XS');
      expectRadius(s, 'S');
      expectRadius(m, 'M');
      await Promise.resolve();
    });

    await step('Padding 확인 (M: 0 12px, S: 0 12px, XS: 4px 6px)', async () => {
      const { xs, s, m } = getButtons();
      const checkPadding = (
        el: HTMLElement,
        size: string,
        top: number,
        right: number,
        bottom: number,
        left: number,
      ) => {
        const st = window.getComputedStyle(el);
        const t = parseFloat(st.paddingTop);
        const r = parseFloat(st.paddingRight);
        const b = parseFloat(st.paddingBottom);
        const l = parseFloat(st.paddingLeft);
        if (t !== top || r !== right || b !== bottom || l !== left) {
          throw new Error(
            `Sizes: ${size} padding ${top}px ${right}px ${bottom}px ${left}px 여야 합니다. (실제: ${t} ${r} ${b} ${l})`,
          );
        }
      };
      checkPadding(xs, 'XS', 4, 6, 4, 6); // 4px 6px
      checkPadding(s, 'S', 0, 12, 0, 12); // 0 12px
      checkPadding(m, 'M', 0, 12, 0, 12); // 0 12px
      await Promise.resolve();
    });
  },
};

export const Loading: Story = {
  args: {
    disabled: false,
    isLoading: true,
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>사이즈별</h3>
        <div style={flexWrap}>
          <Button {...args} styleVar='PRIMARY' sizeVar='XS' isLoading title='XS' aria-label='Loading XS'>
            Loading XS
          </Button>
          <Button {...args} styleVar='PRIMARY' sizeVar='S' isLoading title='S' aria-label='Loading S'>
            Loading S
          </Button>
          <Button {...args} styleVar='PRIMARY' sizeVar='M' isLoading title='M' aria-label='Loading M'>
            Loading M
          </Button>
        </div>
      </section>
      <section>
        <h3 style={{ marginBottom: 12, fontSize: 14, fontWeight: 600 }}>Variants별</h3>
        <div style={flexWrap}>
          <Button {...args} styleVar='PRIMARY' sizeVar='M' isLoading title='PRIMARY' aria-label='Loading Primary'>
            Loading Primary
          </Button>
          <Button {...args} styleVar='SECONDARY' sizeVar='M' isLoading title='SECONDARY' aria-label='Loading Secondary'>
            Loading Secondary
          </Button>
          <Button {...args} styleVar='GHOST' sizeVar='M' isLoading title='GHOST' aria-label='Loading Ghost'>
            Loading Ghost
          </Button>
          <Button
            {...args}
            styleVar='SOLID'
            color='neutral300'
            sizeVar='M'
            isLoading
            title='SOLID'
            aria-label='Loading Solid'
          >
            Loading Solid
          </Button>
        </div>
      </section>
    </div>
  ),
  play: async ({ canvas, step }) => {
    const expectSpinnerInButton = (button: HTMLElement, label: string) => {
      const spinner = button.querySelector('svg');
      if (!spinner) {
        throw new Error(`Loading: ${label} 버튼에 스피너(SVG)가 렌더되어야 합니다.`);
      }
      const rect = spinner.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        throw new Error(`Loading: ${label} 버튼의 스피너가 시각적으로 표시되어야 합니다.`);
      }
    };

    await step('사이즈별 스피너 표시 확인 (XS, S, M)', async () => {
      const xs = canvas.getByRole('button', { name: 'Loading XS' });
      const s = canvas.getByRole('button', { name: 'Loading S' });
      const m = canvas.getByRole('button', { name: 'Loading M' });
      expectSpinnerInButton(xs, 'XS');
      expectSpinnerInButton(s, 'S');
      expectSpinnerInButton(m, 'M');
      await Promise.resolve();
    });

    await step('Variants별 스피너 표시 확인 (PRIMARY, SECONDARY, GHOST, SOLID)', async () => {
      const primary = canvas.getByRole('button', { name: 'Loading Primary' });
      const secondary = canvas.getByRole('button', { name: 'Loading Secondary' });
      const ghost = canvas.getByRole('button', { name: 'Loading Ghost' });
      const solid = canvas.getByRole('button', { name: 'Loading Solid' });
      expectSpinnerInButton(primary, 'PRIMARY');
      expectSpinnerInButton(secondary, 'SECONDARY');
      expectSpinnerInButton(ghost, 'GHOST');
      expectSpinnerInButton(solid, 'SOLID');
      await Promise.resolve();
    });
  },
};

export const Disabled: Story = {
  args: {
    styleVar: 'PRIMARY',
    sizeVar: 'M',
    children: 'Disabled',
    disabled: true,
  },
  play: async ({ canvas, userEvent, step }) => {
    await step('버튼에 disabled 속성이 있는지 확인', async () => {
      const button = canvas.getByRole('button', { name: 'Disabled' });
      if (!button.hasAttribute('disabled')) {
        throw new Error('Disabled: 버튼에 disabled 속성이 있어야 합니다.');
      }
      await Promise.resolve();
    });
    await step('버튼의 disabled 프로퍼티가 true인지 확인', async () => {
      const button = canvas.getByRole('button', { name: 'Disabled' });
      if (!(button as HTMLButtonElement).disabled) {
        throw new Error('Disabled: 버튼의 disabled 프로퍼티가 true여야 합니다.');
      }
      await Promise.resolve();
    });
    await step('disabled 버튼 클릭 시 동작하지 않는지 확인', async () => {
      const button = canvas.getByRole('button', { name: 'Disabled' });
      await userEvent.click(button);
    });
  },
};

export const WithIcon: Story = {
  args: {
    styleVar: 'PRIMARY',
    sizeVar: 'M',
    children: 'Edit',
    leftSource: <Icon sizeVar='S' iconSource={EditIcon} />,
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Edit' }));
  },
};
