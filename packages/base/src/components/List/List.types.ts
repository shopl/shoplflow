import type {
  ChildrenProps,
  DisableProps,
  LeftNodeProps,
  RightNodeProps,
  SelectedProps,
} from '../../utils/type/ComponentProps';
import type { HTMLAttributes, ReactNode } from 'react';

export interface ListProps extends ListOptionProps {}
export interface ListOptionProps
  extends ChildrenProps,
    DisableProps,
    SelectedProps,
    LeftNodeProps,
    RightNodeProps,
    HTMLAttributes<HTMLLIElement> {}

export interface ListContent2ColumnsProps extends ChildrenProps {}

export interface ListText2RowsProps {
  title: ReactNode;
  subTitle?: ReactNode;
}
