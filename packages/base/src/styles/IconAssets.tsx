import * as ShoplAssets from '@shoplflow/shopl-assets';
import * as HadaAssets from '@shoplflow/hada-assets';
import type { IconSource as ShoplIconSource } from '@shoplflow/shopl-assets';
import type { IconSource as HadaIconSource } from '@shoplflow/hada-assets';

import { useContext } from 'react';
import type { DomainType } from '../types/Domain';
import { StoryDomainContext } from '../../.storybook/useStoryDomain';
import { getDomain } from '../hooks';

export type ShoplIconKey = Exclude<keyof typeof ShoplAssets, 'isShoplIcon' | 'createIcon'>;
export type HadaIconKey = Exclude<keyof typeof HadaAssets, 'isHadaIcon' | 'createIcon'>;

export type IconNameType = ShoplIconKey & HadaIconKey;

/**
 * 스토리북 파일에서만 사용합니다.
 */
export const useStoryAssetFunction = (iconName: IconNameType) => {
  const { domain } = useContext(StoryDomainContext);
  const HadaIcon = HadaAssets[iconName] as HadaIconSource;
  const ShoplIcon = ShoplAssets[iconName] as ShoplIconSource;
  return domain === 'HADA' ? HadaIcon : ShoplIcon;
};

/**
 * 특정 컴포넌트 내부에서 아이콘을 포함하고 있을 경우 분기 용도로 사용합니다.
 * 빌드에 포함 가능합니다.
 */
export const assetFunction = (iconName: IconNameType, domainProps?: DomainType) => {
  const domain = domainProps ?? getDomain();
  const HadaIcon = HadaAssets[iconName] as HadaIconSource;
  const ShoplIcon = ShoplAssets[iconName] as ShoplIconSource;
  return domain === 'hada' ? HadaIcon : ShoplIcon;
};
