import { Text } from '../../../components/Text';
import { Wrapper } from './TextLengthWithMax.styled';
import { spacingTokens } from '../../../styles';
import type { TextLengthWithMaxProps } from './TextLengthWithMax.types';

const TextLengthWithMax = ({ nowLength, maxLength }: TextLengthWithMaxProps) => {
  return (
    <Wrapper style={{ paddingLeft: spacingTokens.spacing08 }}>
      <Text typography='caption_400' color='neutral400'>
        {nowLength}
      </Text>
      <Text typography='caption_400' color='neutral350'>
        /
      </Text>
      <Text typography='caption_400' color='neutral350'>
        {maxLength}
      </Text>
    </Wrapper>
  );
};

export default TextLengthWithMax;
