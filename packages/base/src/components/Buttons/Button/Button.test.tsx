import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button', () => {
  it('렌더 시 children 텍스트가 보인다', () => {
    render(<Button>저장하기</Button>);
    expect(screen.getByText('저장하기')).toBeInTheDocument();
  });

  it('클릭 시 onClick이 호출된다', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>클릭</Button>);
    await user.click(screen.getByRole('button', { name: '클릭' }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('disabled일 때 클릭해도 onClick이 호출되지 않는다', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(
      <Button onClick={handleClick} disabled>
        비활성
      </Button>,
    );
    const button = screen.getByRole('button', { name: '비활성' });
    await user.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('data-shoplflow 속성이 Button으로 설정된다', () => {
    render(<Button>버튼</Button>);
    expect(screen.getByRole('button')).toHaveAttribute('data-shoplflow', 'Button');
  });

  it('isLoading일 때 스피너(SVG)가 노출된다', () => {
    render(<Button isLoading>로딩 중</Button>);
    const button = screen.getByRole('button');
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('다양한 styleVar로 렌더된다', () => {
    const { rerender } = render(<Button styleVar='PRIMARY'>Primary</Button>);
    expect(screen.getByText('Primary')).toBeInTheDocument();

    rerender(<Button styleVar='SECONDARY'>Secondary</Button>);
    expect(screen.getByText('Secondary')).toBeInTheDocument();

    rerender(<Button styleVar='GHOST'>Ghost</Button>);
    expect(screen.getByText('Ghost')).toBeInTheDocument();
  });
});
