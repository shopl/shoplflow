import type {
  ChildrenProps,
  DefaultSelectedProps,
  DisableProps,
  LeftElementProps,
  RightElementProps,
  SelectedProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes } from 'react';

export interface MenuProps extends MenuOptionProps, HTMLAttributes<HTMLLIElement> {}
export interface MenuOptionProps
  extends ChildrenProps,
    DisableProps,
    RightElementProps,
    LeftElementProps,
    SelectedProps,
    DefaultSelectedProps {}
