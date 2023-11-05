import * as ShoplAssets from '@shoplflow/shopl-assets';
import * as HadaAssets from '@shoplflow/hada-assets';
import type { IconSource as ShoplIconSource } from '@shoplflow/shopl-assets';
import type { IconSource as HadaIconSource } from '@shoplflow/hada-assets';
import { getDomain } from '../hooks';

import { forwardRef } from 'react';

type IconNameType = keyof typeof ShoplAssets & keyof typeof HadaAssets;

interface AssetsProps {
  iconName: IconNameType;
}

export const Assets = forwardRef<HTMLElement, AssetsProps>(({ iconName }, ref) => {
  const domain = getDomain();
  const ShoplIcon = ShoplAssets[iconName] as ShoplIconSource;
  const HadaIcon = HadaAssets[iconName] as HadaIconSource;

  if (domain === 'hada') {
    return <HadaIcon ref={ref} />;
  }
  return <ShoplIcon ref={ref} />;
});

export const AssetFunction = ({ iconName }: AssetsProps) => {
  const domain = getDomain();
  const ShoplIcon = ShoplAssets[iconName] as ShoplIconSource;
  const HadaIcon = HadaAssets[iconName] as HadaIconSource;

  if (domain === 'hada') {
    return HadaIcon;
  }
  return ShoplIcon;
};
