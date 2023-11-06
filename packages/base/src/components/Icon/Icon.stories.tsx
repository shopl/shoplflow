import React, { useContext } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Icon from './Icon';
import type { IconProps } from './Icon.types';
import type { IconNameType } from '../../styles/IconAssets';
import { assetFunction } from '../../styles/IconAssets';
import * as ShoplAssets from '@shoplflow/shopl-assets';
import * as HadaAssets from '@shoplflow/hada-assets';
import { Text } from '../Text';
import { StoryDomainContext } from '../../../.storybook/useStoryDomain';

export default {
  title: 'COMPONENTS/Icon',
  component: Icon,
} as Meta;

const hadaAssetList = Object.keys(HadaAssets).filter((data) => !data.includes('create')) as IconNameType[];
const shoplAssetList = Object.keys(ShoplAssets).filter((data) => !data.includes('create')) as IconNameType[];

export const Playground: StoryFn<IconProps> = (args) => {
  const { domain } = useContext(StoryDomainContext);

  return (
    <Stack.Horizontal width={'100%'} flexWrap={'wrap'} spacing={'spacing20'}>
      {(domain === 'SHOPL' ? shoplAssetList : hadaAssetList).map((asset) => (
        <Stack key={asset} align={'center'} spacing={'spacing08'} width={'100px'}>
          <Stack background={'neutral100'} radius={'borderRadius06'}>
            <Icon {...args} iconSource={assetFunction(asset)} />
          </Stack>
          <Text typography={'caption_400'} wordBreak={'break-all'}>
            {asset}
          </Text>
        </Stack>
      ))}
    </Stack.Horizontal>
  );
};

Playground.args = {
  sizeVar: 'MEDIUM',
};

export const Illustration = () => {
  return (
    <Stack.Horizontal width={'100%'} flexWrap={'wrap'} spacing={'spacing20'}>
      {(domain === 'SHOPL' ? shoplAssetList : hadaAssetList).map((asset) => (
        <Stack key={asset} align={'center'} spacing={'spacing08'} width={'100px'}>
          <Stack background={'neutral100'} radius={'borderRadius06'}>
            <Icon {...args} iconSource={assetFunction(asset)} />
          </Stack>
          <Text typography={'caption_400'} wordBreak={'break-all'}>
            {asset}
          </Text>
        </Stack>
      ))}
    </Stack.Horizontal>
  );
};
