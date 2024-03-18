import type { ComponentPropsWithRef } from 'react';
import React, { forwardRef } from 'react';

import { motion } from 'framer-motion';

import type {
  MotionStackComponentType,
  StackComponentType,
  StackGenericProps,
  StackContainerProps,
} from './StackContainer.types';

import { StyledStack } from './StackContainer.styled';
import type { StringElementType } from '../../utils/type/ComponentProps';

/**
 *
 * @param {StackContainerProps} stackOption
 * @return {StackComponentType}
 */
const createStackComponent = (stackOption?: StackContainerProps): StackComponentType =>
  forwardRef(function Stack(
    {
      as = 'div',
      spacing = stackOption?.spacing,
      direction = stackOption?.direction ?? 'column',
      align = stackOption?.align ?? 'flex-start',
      justify = stackOption?.justify ?? 'flex-start',
      width = stackOption?.width ?? 'initial',
      height = stackOption?.height ?? 'initial',
      flexWrap = stackOption?.flexWrap ?? 'initial',
      flex = stackOption?.flex ?? 'initial',
      radius = stackOption?.radius,
      margin = stackOption?.margin ?? 'initial',
      padding = stackOption?.padding ?? 'initial',
      background = stackOption?.background,
      ...rest
    }: StackGenericProps,
    ref: ComponentPropsWithRef<StringElementType>['ref'],
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
        margin={margin}
        padding={padding}
        {...rest}
        data-shoplflow={'Stack'}
      >
        {rest.children}
      </StyledStack>
    );
  });

interface StackType extends StackComponentType {
  Vertical: StackComponentType;
  Horizontal: StackComponentType;
}

export const StackContainer = createStackComponent() as StackType;
StackContainer.Vertical = createStackComponent({ direction: 'column' });
StackContainer.Horizontal = createStackComponent({ direction: 'row' });

interface MotionStackType extends MotionStackComponentType {
  Vertical: MotionStackComponentType;
  Horizontal: MotionStackComponentType;
}

export const MotionStack = motion(StackContainer) as MotionStackType;
MotionStack.Vertical = motion(StackContainer.Vertical);
MotionStack.Horizontal = motion(StackContainer.Horizontal);

export default StackContainer;
