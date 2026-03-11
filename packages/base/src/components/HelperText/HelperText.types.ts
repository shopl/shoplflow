import type { ReactNode } from 'react';

import type { ColorTokens } from '../../styles';
import type { TextProps } from '../Text';

type BaseHelperTextProps = {
  color?: ColorTokens;
  children?: ReactNode;
};

type PositionProps = {
  position?: 'PRESET-TOP' | 'PRESET-BOTTOM';
};

export type NormalHelperTextOptionProps = BaseHelperTextProps &
  PositionProps & {
    type?: 'NORMAL';
  };

export type BulletHelperTextOptionProps = BaseHelperTextProps & {
  type: 'BULLET';
  position?: never;
};

export type HelperTextOptionProps = NormalHelperTextOptionProps | BulletHelperTextOptionProps;

export type HelperTextProps = HelperTextOptionProps & Omit<TextProps, 'typography'>;
