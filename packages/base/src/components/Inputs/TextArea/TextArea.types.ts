import type { ComponentPropsWithoutRef, ReactElement } from 'react';
import type { DisableProps, ErrorProps } from '../../../utils/type/ComponentProps';
import type { ColorTokens } from '../../../styles';

export interface TextAreaOptionProps extends DisableProps, ErrorProps {
  /**
   * TextArea의 너비를 설정합니다.
   */
  width?: string;
  /**
   * maxLength를 설정합니다.
   */
  maxLength?: number;

  /**
   * TextArea의 높이를 설정합니다.
   */
  height?: string;

  /**
   * TextArea의 최소 높이를 설정합니다.
   */
  minHeight?: string;
  /**
   * focused 상태일 때의 border-color를 설정합니다.
   */
  focusedBorderColor?: ColorTokens;
  /**
   * TextArea Toolbar의 왼쪽 요소를 설정합니다.
   */
  leftSource?: ReactElement;
  /**
   * TextArea Toolbar의 오른쪽 요소를 설정합니다.
   */
  rightSource?: ReactElement;
}

export type TextAreaProps = ComponentPropsWithoutRef<'textarea'> & TextAreaOptionProps;
