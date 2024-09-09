import React from 'react';
import { HelpIcon } from '@shoplflow/shopl-assets';
import { Stack } from '../Stack';
import { StackContainer } from '../StackContainer';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import type { TitleProps } from './Title.types';
import { getDomain } from '../../hooks';

const Title = ({
  title,
  titleTypography = 'body1_700',
  titleColor = 'neutral700',
  total,
  description,
  tooltipPlacement = 'right',
  isRequired,
  isShowHelpIcon,
  tooltipOffsetValue,
  tooltipMessage = '',
  rightSource,
}: TitleProps) => {
  const domain = getDomain();
  const descriptionTypography = domain === 'hada' ? 'body2_400' : 'body1_400';

  return (
    <Stack.Vertical width={'100%'}>
      <StackContainer
        direction={'row'}
        align={'center'}
        width={'100%'}
        minHeight={'40px'}
        height={'auto'}
        justify={'space-between'}
      >
        {/* 제목 영역 */}
        <Stack.Horizontal align='center' spacing={'spacing04'}>
          <Text color={titleColor} typography={titleTypography} wordBreak={'break-all'}>
            {title}{' '}
            {isRequired && (
              <Text typography='body1_700' color={'red300'}>
                *
              </Text>
            )}
          </Text>
          <Text color={'primary300'} typography={'body1_700'}>
            {total}
          </Text>
          {isShowHelpIcon && (
            <Tooltip
              placement={tooltipPlacement}
              offset={tooltipOffsetValue}
              trigger={<HelpIcon width={20} height={20} />}
              popper={<Tooltip.Content content={tooltipMessage} />}
            />
          )}
        </Stack.Horizontal>
        {/* 아이콘 영역 */}
        {rightSource && rightSource}
      </StackContainer>
      {/* 설명 영역 */}
      {description && (
        <StackContainer minHeight={'30px'} height={'auto'}>
          <Text typography={descriptionTypography} color={'neutral500'} wordBreak={'break-all'}>
            {description}
          </Text>
        </StackContainer>
      )}
    </Stack.Vertical>
  );
};

export default Title;
