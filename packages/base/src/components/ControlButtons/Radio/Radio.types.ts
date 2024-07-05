import type { DefaultSelectedProps, DisableProps, SelectedProps } from '../../../utils/type/ComponentProps';
import type { ButtonHTMLAttributes } from 'react';

export interface RadioProps extends RadioOptionProps {}
export interface RadioOptionProps
  extends SelectedProps,
    DefaultSelectedProps,
    DisableProps,
    ButtonHTMLAttributes<HTMLButtonElement> {}
