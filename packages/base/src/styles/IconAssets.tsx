import * as ShoplAssets from '@shoplflow/shopl-assets';
import * as HadaAssets from '@shoplflow/hada-assets';
import type { IconSource as ShoplIconSource } from '@shoplflow/shopl-assets';
import type { IconSource as HadaIconSource } from '@shoplflow/hada-assets';

import { forwardRef } from 'react';
import { getDomain } from '../hooks';

export type ShoplIconKey = Exclude<keyof typeof ShoplAssets, 'isShoplIcon' | 'createIcon'>;
export type HadaIconKey = Exclude<keyof typeof HadaAssets, 'isHadaIcon' | 'createIcon'>;

export type IconNameType = ShoplIconKey & HadaIconKey;
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

export const assetFunction = (iconName: IconNameType) => {
  const domain = getDomain();
  const ShoplIcon = ShoplAssets[iconName] as ShoplIconSource;
  const HadaIcon = HadaAssets[iconName] as HadaIconSource;

  if (domain === 'hada') {
    return HadaIcon;
  }
  return ShoplIcon;
};
