import type { ComponentPropsWithoutRef } from 'react';
import type { DisableProps, ErrorProps } from '../../../utils/type/ComponentProps';

export interface TextAreaOptionProps extends DisableProps, ErrorProps {
  width?: string;
  /**
   * maxLength를 설정해요.
   */
  maxLength?: number;

  /**
   * text area의 높이를 조절해요.
   */
  height?: string;

  /**
   * text area의 최소 높이를 조절해요.
   */
  minHeight?: string;
}

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & TextAreaOptionProps;
