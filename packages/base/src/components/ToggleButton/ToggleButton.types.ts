import type { $Values } from '@shoplflow/utils';
import type { HTMLAttributes, InputHTMLAttributes } from 'react';

export const ToggleButtonSizeVariants = {
  S: 'S',
  M: 'M',
} as const;

export type ToggleButtonSizeVariantType = $Values<typeof ToggleButtonSizeVariants>;

interface ToggleButtonBaseProps extends ToggleButtonOptionProps, HTMLAttributes<HTMLDivElement> {
  targetName: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  selectedValue?: string;
  sizeVar?: ToggleButtonSizeVariantType;
  disabled?: boolean;
  /**
   * 값이 있으면 각 InnerRadio의 라벨 텍스트를 해당 줄 수로 제한(line-clamp)하고,
   * 넘치는 텍스트는 말줄임(…)으로 처리합니다.
   * 너비가 제약되는 `fullWidth` 모드에서 가장 잘 동작합니다.
   */
  buttonLineClamp?: number;
}

/**
 * 너비 설정 방식 (둘 중 하나만 사용):
 * - `fullWidth: true` → Wrapper가 부모 가용 너비를 100% 채우고, 각 아이템을 동일 비율(`flex: 1`)로 분배합니다. 이때 `fixedWidth`는 생략 가능합니다.
 * - `fullWidth` 미지정(또는 false) → 각 아이템의 고정 너비인 `fixedWidth`(px)가 필수입니다.
 */
export type ToggleButtonWidthProps =
  | {
      /** 부모 가용 너비를 100% 채우고 각 아이템을 동일 비율(flex:1)로 분배합니다. */
      fullWidth: true;
      /** fullWidth가 true이면 무시되며 생략 가능합니다. */
      fixedWidth?: number;
    }
  | {
      /** fixedWidth 기반 고정 너비 모드입니다. */
      fullWidth?: false;
      /** 각 아이템의 고정 너비(px)입니다. */
      fixedWidth: number;
    };

export type ToggleButtonProps = ToggleButtonBaseProps & ToggleButtonWidthProps;

export interface ToggleButtonOptionProps {}

export interface ToggleButtonInnerRadioProps
  extends ToggleButtonInnerRadioOptionProps, InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export interface ToggleButtonInnerRadioOptionProps {
  disabled?: boolean;
  selected?: boolean;
}
