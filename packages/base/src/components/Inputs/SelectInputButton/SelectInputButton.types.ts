import type { HTMLAttributes, MouseEvent } from 'react';
import type { DisableProps, RightElementProps, SelectedProps } from '../../../utils/type/ComponentProps';

export interface SelectInputButtonProps extends SelectInputButtonOptionProps {}
export interface SelectInputButtonOptionProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, 'onChange' | 'onClick'>,
    DisableProps,
    RightElementProps,
    SelectedProps {
  width?: string;
  /**
   * Input의 placeholder를 설정합니다.
   */
  placeholder?: string;
  /**
   * Input의 value가 변경될 경우 호출되는 함수입니다.
   */
  onClick?: (e: MouseEvent<HTMLLabelElement>) => void;
  /**
   * 선택한 값을 받습니다.
   */
  value?: Array<Record<string, unknown>>;
  /**
   * 받은 value 중 label로 보여줄 값을 받습니다.
   */
  label?: string;
  /**
   * 값이 삭제될 때 실행할 함수입니다.
   */
  onClear?: (e: MouseEvent<HTMLButtonElement>) => void;
}
