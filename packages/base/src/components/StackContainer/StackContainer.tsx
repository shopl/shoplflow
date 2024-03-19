import type { ComponentPropsWithRef } from 'react';
import React, { forwardRef } from 'react';

import { motion } from 'framer-motion';

import type {
  MotionStackContainerComponentType,
  StackContainerComponentType,
  StackContainerGenericProps,
  StackContainerProps,
} from './StackContainer.types';

import { StyledStackContainer } from './StackContainer.styled';
import type { StringElementType } from '../../utils/type/ComponentProps';

/**
 *
 * @param {StackContainerProps} stackOption
 * @return {StackContainerComponentType}
 */
const createStackComponent = (stackOption?: StackContainerProps): StackContainerComponentType =>
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
    }: StackContainerGenericProps,
    ref: ComponentPropsWithRef<StringElementType>['ref'],
  ) {
    return (
      <StyledStackContainer
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
        data-shoplflow={'StackContainer'}
      >
        {rest.children}
      </StyledStackContainer>
    );
  });

interface StackContainerType extends StackContainerComponentType {
  Vertical: StackContainerComponentType;
  Horizontal: StackContainerComponentType;
}

export const StackContainer = createStackComponent() as StackContainerType;
StackContainer.Vertical = createStackComponent({ direction: 'column' });
StackContainer.Horizontal = createStackComponent({ direction: 'row' });

interface MotionStackType extends MotionStackContainerComponentType {
  Vertical: MotionStackContainerComponentType;
  Horizontal: MotionStackContainerComponentType;
}

export const MotionStackContainer = motion(StackContainer) as MotionStackType;
MotionStackContainer.Vertical = motion(StackContainer.Vertical);
MotionStackContainer.Horizontal = motion(StackContainer.Horizontal);

export default StackContainer;
