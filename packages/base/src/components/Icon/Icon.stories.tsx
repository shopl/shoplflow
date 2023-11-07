import React, { useContext } from 'react';

import type { Meta, StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import Icon from './Icon';
import type { IconProps } from './Icon.types';
import type { IconNameType } from '../../styles/IconAssets';
import { useStoryAssetFunction } from '../../styles/IconAssets';
import * as ShoplAssets from '@shoplflow/shopl-assets';
import * as HadaAssets from '@shoplflow/hada-assets';
import { Text } from '../Text';
import { StoryDomainContext } from '../../../.storybook/useStoryDomain';
import { IconStage } from '../../styles/Box';

export default {
  title: 'COMPONENTS/Icon',
  component: Icon,
} as Meta;

const hadaAssetList = Object.keys(HadaAssets).filter((data) => !data.includes('create')) as IconNameType[];
const shoplAssetList = Object.keys(ShoplAssets).filter((data) => !data.includes('create')) as IconNameType[];

const Template = (iconName: IconNameType) => {
  return useStoryAssetFunction(iconName);
};

export const Playground: StoryFn<IconProps> = (args) => {
  const { domain } = useContext(StoryDomainContext);

  return (
    <Stack.Horizontal width={'100%'} flexWrap={'wrap'} spacing={'spacing20'}>
      {(domain === 'SHOPL' ? shoplAssetList : hadaAssetList).map((asset) => (
        <Stack key={asset} align={'center'} spacing={'spacing08'} width={'100px'}>
          <IconStage>
            <Icon {...args} iconSource={Template(asset)} />
          </IconStage>

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
