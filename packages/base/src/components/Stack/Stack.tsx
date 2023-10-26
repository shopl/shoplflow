import type { ComponentPropsWithRef } from 'react';
import React, { forwardRef } from 'react';

import { motion } from 'framer-motion';

import type { MotionStackComponentType, StackComponentType, StackGenericProps, StackProps } from './Stack.types';

import { StyledStack } from './Stack.styled';
import type { StringElementType } from '../../utils/type/ComponentProps';

/**
 *
 * @param {StackProps} stackOption
 * @return {StackComponentType}
 */
const createStackComponent = (stackOption?: StackProps): StackComponentType =>
  forwardRef(function Stack<T extends StringElementType>(
    {
      as = 'div',
      spacing = stackOption?.spacing ?? 'spacing08',
      direction = stackOption?.direction ?? 'column',
      align = stackOption?.align ?? 'flex-start',
      justify = stackOption?.justify ?? 'flex-start',
      width = stackOption?.width ?? 'initial',
      height = stackOption?.height ?? 'initial',
      flexWrap = stackOption?.flexWrap ?? 'initial',
      flex = stackOption?.flex ?? 'initial',
      radius = stackOption?.radius,
      background = stackOption?.background,
      ...rest
    }: StackGenericProps<T>,
    ref: ComponentPropsWithRef<T>['ref'],
  ) {
    return (
      <StyledStack
        as={as}
        spacing={spacing}
        ref={ref}
        direction={direction}
        align={align}
        justify={justify}
        width={width}
        height={height}
        flexWrap={flexWrap}
        flex={flex}
        background={background}
        radius={radius}
        data-shoplflow={'stack'}
        {...rest}
      >
        {rest.children}
      </StyledStack>
    );
  });

interface StackType extends StackComponentType {
  Vertical: StackComponentType;
  Horizontal: StackComponentType;
}

export const Stack = createStackComponent() as StackType;
Stack.Vertical = createStackComponent({ direction: 'column' });
Stack.Horizontal = createStackComponent({ direction: 'row' });

interface MotionStackType extends MotionStackComponentType {
  Vertical: MotionStackComponentType;
  Horizontal: MotionStackComponentType;
}

export const MotionStack = motion(Stack) as MotionStackType;
MotionStack.Vertical = motion(Stack.Vertical);
MotionStack.Horizontal = motion(Stack.Horizontal);

export default Stack;
