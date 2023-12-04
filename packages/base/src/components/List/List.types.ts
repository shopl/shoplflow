import type {
  ChildrenProps,
  DisableProps,
  LeftNodeProps,
  RightNodeProps,
  SelectedProps,
} from '../../utils/type/ComponentProps';
import type { ReactNode } from 'react';

export interface ListProps extends ListOptionProps {}
export interface ListOptionProps extends ChildrenProps, DisableProps, SelectedProps, LeftNodeProps, RightNodeProps {}

export interface ListContent2ColumnsProps extends ChildrenProps {}

export interface ListText2RowsProps {
  title: ReactNode;
  subTitle: ReactNode;
}
