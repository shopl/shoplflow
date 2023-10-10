import type React from 'react';
import type { ComponentPropsWithoutRef } from 'react';

export interface TextAreaOptionProps {
  name?: string;

  /**
   * maxLength를 설정해요.
   */
  maxLength?: number;

  /**
   * 현재 텍스트의 길이W
   */
  nowLength?: number;

  /**
   * 에러여부를 설정해요.
   */
  isError?: boolean;

  /**
   * text area의 기본 높이를 조절해요.
   */
  height?: number;

  /**
   * text area의 최소 높이를 조절해요.
   */
  minHeight?: number;

  /**
   * 비활성화 상태를 설정해요.
   */
  disabled?: boolean;

  wrapperStyle?: React.CSSProperties;
}

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & TextAreaOptionProps;
