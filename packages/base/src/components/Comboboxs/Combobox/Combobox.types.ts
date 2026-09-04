import type { $Values } from '@shoplflow/utils';
import type { CSSProperties, ReactNode } from 'react';
import type { DisableProps, ErrorProps, SizeVariantProps } from '../../../utils/type/ComponentProps';

export const ComboboxSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type ComboboxSizeVariantType = $Values<typeof ComboboxSizeVariants>;

export const ComboboxTextAlignVariants = {
  left: 'left',
  right: 'right',
} as const;

export type ComboboxTextAlignType = $Values<typeof ComboboxTextAlignVariants>;

export const ComboboxInputModeVariants = {
  text: 'text',
  numeric: 'numeric',
} as const;

export type ComboboxInputModeType = $Values<typeof ComboboxInputModeVariants>;

export type ComboboxItem = {
  label: string;
  value: string;
};

export type ComboboxProps = ComboboxOptionProps;

export interface ComboboxOptionProps extends DisableProps, ErrorProps, SizeVariantProps<ComboboxSizeVariantType> {
  /**
   * 드롭다운에 표시할 항목입니다.
   */
  items: ComboboxItem[];
  /**
   * 입력값입니다. 전달하면 제어 컴포넌트로 동작합니다.
   */
  value?: string;
  /**
   * 비제어 모드의 초기값입니다.
   */
  defaultValue?: string;
  /**
   * 입력값이 바뀔 때 호출됩니다.
   */
  onChange?: (value: string) => void;
  /**
   * 입력 모드입니다. `numeric`이면 숫자만 입력됩니다.
   * @default 'text'
   */
  inputMode?: ComboboxInputModeType;
  /**
   * 목록에서 선택하면 item.value가 전달됩니다. Enter로 확정하면 현재 입력값이 전달됩니다.
   */
  onSelect?: (value: string) => void;
  /**
   * 필드 너비입니다. 태그 영역은 포함하지 않습니다.
   */
  width?: CSSProperties['width'];
  placeholder?: string;
  maxLength?: number;
  /**
   * 팝오버 z-index입니다.
   */
  floatingZIndex?: CSSProperties['zIndex'];
  /**
   * 입력 텍스트 정렬입니다.
   * @default 'left'
   */
  textAlign?: ComboboxTextAlignType;
  /**
   * 필드 바깥 오른쪽에 붙는 선택적 태그/단위 영역입니다.
   */
  tag?: ReactNode;
  className?: string;
  'aria-label'?: string;
}
