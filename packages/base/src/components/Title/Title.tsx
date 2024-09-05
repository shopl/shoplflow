import React from 'react';
import * as Styled from './Title.styled';
import { HelpIcon } from '@shoplflow/shopl-assets';
import { Stack } from '../Stack';
import { StackContainer } from '../StackContainer';
import { Text } from '../Text';
import { Tooltip } from '../Tooltip';
import type { TitleProps } from './Title.types';

const Title = ({
  title,
  titleTypography = 'body1_700',
  titleColor = 'neutral700',
  description,
  tooltipPlacement = 'right',
  isRequired,
  showHelpIcon,
  tooltipOffsetValue,
  tooltipMessage = '',
  rightSource,
}: TitleProps) => {
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
          <Text color={titleColor} typography={titleTypography} style={{ wordWrap: 'break-word' }}>
            {title}
          </Text>
          {isRequired && <Styled.Required>*</Styled.Required>}
          {showHelpIcon && (
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
          <Text typography={'body1_400'} color={'neutral500'}>
            {description}
          </Text>
        </StackContainer>
      )}
    </Stack.Vertical>
  );
};

export default Title;
