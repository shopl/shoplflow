import { Text } from '../../../components/Text';

import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
`;

export type TextCounterProps = {
  maxLength: number;
  currentLength: number;
};

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
