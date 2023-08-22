import { forwardRef } from 'react';

/* eslint-disable @typescript-eslint/naming-convention */
export type AsProp<T extends React.ElementType> = {
  as?: T;
};

export type PolymorphicRef<T extends React.ElementType> = React.ComponentPropsWithRef<T>['ref'];

export type PolymorphicComponentProps<T extends React.ElementType, Props extends object = {}> = AsProp<T> &
  React.ComponentPropsWithoutRef<T> &
  Props;

// 예제 코드
type _TextProps = {
  size: number;
  color: string;
};

export type TextProps<T extends React.ElementType> = PolymorphicComponentProps<T, _TextProps>;

type TextComponent = <T extends React.ElementType = 'span'>(props: TextProps<T>) => React.ReactElement | null;

export const Text: TextComponent = forwardRef(
  <T extends React.ElementType = 'span'>(
    { as, size, color, ...props }: TextProps<T>,
    ref: PolymorphicRef<T>['ref'],
  ) => {
    const Element = as || 'span';
    // size와 color를 style로 적용
    return <Element ref={ref} {...props} style={{ fontSize: size, color }} />;
  },
);
