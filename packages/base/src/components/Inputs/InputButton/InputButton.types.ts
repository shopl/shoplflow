import type { HTMLAttributes } from 'react';
import type { DisableProps, RightElementProps } from '../../../utils/type/ComponentProps';

export interface InputButtonProps extends InputButtonOptionProps {}
export interface InputButtonOptionProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    RightElementProps,
    DisableProps {
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
  onDelete?: () => void;
  /**
   * Input의 placeholder를 설정합니다.
   */
  placeholder?: string;
  /**
   * Input의 value가 변경될 경우 호출되는 함수입니다.
   */
  onChange?: (value?: string) => void;
}
