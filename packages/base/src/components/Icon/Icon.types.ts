import type { $Values } from '@shoplflow/utils';
import type { HTMLAttributes } from 'react';
import type { ColorTokenProps, IconSourceProps, SizeVariantProps } from '../../utils/type/ComponentProps';

export const IconSizeVariants = {
  XS: 'XS',
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
} as const;

export type IconSizeVariantsType = $Values<typeof IconSizeVariants>;

export interface IconProps extends IconOptionProps {}
export interface IconOptionProps
  extends SizeVariantProps<IconSizeVariantsType>,
    IconSourceProps,
    ColorTokenProps,
    Omit<HTMLAttributes<SVGSVGElement>, 'color'> {}

export type DangerouslySetInnerHTML =
  | (string & {
      // Should be InnerHTML['innerHTML'].
      // But unfortunately we're mixing renderer-specific type declarations.
      __html: string | TrustedHTML;
    })
  | undefined;
