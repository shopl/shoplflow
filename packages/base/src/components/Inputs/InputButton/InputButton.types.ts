import type { HTMLAttributes, MouseEvent } from 'react';
import type { DisableProps, RightElementProps, SelectedProps } from '../../../utils/type/ComponentProps';

export interface InputButtonProps extends InputButtonOptionProps {}
export interface InputButtonOptionProps
  extends Omit<HTMLAttributes<HTMLInputElement>, 'onChange' | 'onClick'>,
    RightElementProps,
    DisableProps,
    SelectedProps {
  width?: string;
  /**
   * 초기값을 설정합니다.
   */
  defaultValue?: string | number | readonly string[];
  /**
   * Input의 value를 설정합니다.
   */
  value?: string | number | readonly string[];
  /**
   * 값이 삭제될 때 실행할 함수입니다.
   */
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;

  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;

  /**
   * Input의 placeholder를 설정합니다.
   */
  placeholder?: string;
  /**
   * Input의 value가 변경될 경우 호출되는 함수입니다.
   */
  onChange?: (value?: string) => void;
}
