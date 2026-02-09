import React, { forwardRef, useContext } from 'react';

import type { StoryFn } from '@storybook/react-vite';
import { Stack } from '../Stack';
import Icon from './Icon';
import type { DangerouslySetInnerHTML, IconProps } from './Icon.types';
import type { IconNameType } from '../../styles/IconAssets';
import { useStoryAssetFunction } from '../../styles/IconAssets';
import * as ShoplAssets from '@shoplflow/shopl-assets';
import * as HadaAssets from '@shoplflow/hada-assets';
import { Text } from '../Text';
import { StoryDomainContext } from '../../../.storybook/useStoryDomain';
import { IconStage } from '../../styles/Box';
import { StyledIcon } from './Icon.styled';

export default {
  title: 'COMPONENTS/Icon',
  component: Icon,
  argTypes: {
    dangerouslySetInnerHTML: {
      control: {
        type: 'text',
      },
    },
  },
};

const assetFilter = (assets: Record<string, unknown>, type: 'Icon' | 'illust') => {
  return Object.keys(assets)
    .filter((data) => !data.includes('create'))
    .filter((data) => !data.startsWith('is'))
    .filter((data) => data.includes(type)) as IconNameType[];
};

const Template = (iconName: IconNameType) => {
  return useStoryAssetFunction(iconName);
};

const MockIcon = forwardRef<SVGSVGElement, IconProps>(({ iconSource, dangerouslySetInnerHTML, ...rest }, ref) => {
  const htmlContent = (
    dangerouslySetInnerHTML ? { __html: dangerouslySetInnerHTML } : undefined
  ) as DangerouslySetInnerHTML;
  if (htmlContent && iconSource) {
    throw new Error('Icon: iconSource와 dangerouslySetInnerHTML은 동시에 사용할 수 없습니다.');
  }
  return (
    <StyledIcon as={iconSource} ref={ref} {...rest} data-shoplflow={'Icon'} dangerouslySetInnerHTML={htmlContent} />
  );
});

export const Playground: StoryFn<IconProps> = ({ dangerouslySetInnerHTML, ...args }) => {
  const { domain } = useContext(StoryDomainContext);

  return (
    <Stack.Horizontal width={'100%'} flexWrap={'wrap'} spacing={'spacing20'}>
      <IconStage>
        <MockIcon dangerouslySetInnerHTML={dangerouslySetInnerHTML} color={args.color} sizeVar={args.sizeVar} />
      </IconStage>
      {(domain === 'SHOPL' ? assetFilter(ShoplAssets, 'Icon') : assetFilter(HadaAssets, 'Icon')).map((asset) => (
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
  sizeVar: 'M',
};
