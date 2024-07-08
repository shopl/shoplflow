import type { ChildrenProps } from '../../utils/type/ComponentProps';

export interface BackDropProps extends ChildrenProps, BackDropOptionProps {
  zIndex?: number;
}

export interface BackDropOptionProps {}
