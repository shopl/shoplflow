import type { ChildrenProps, DisableProps } from '../../utils/type/ComponentProps';

export interface MenuProps extends MenuOptionProps {}
export interface MenuOptionProps extends ChildrenProps, DisableProps {}
