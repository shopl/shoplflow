import { Text } from '../../../components/Text';
import { Wrapper } from './TextCounter.styled';
import type { TextCounterProps } from './TextCounter.types';

const TextCounter = ({ currentLength, maxLength }: TextCounterProps) => {
  return (
    <Wrapper>
      <Text typography='caption_400' color='neutral400'>
        {currentLength}
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

export default TextCounter;
