import React from 'react';
import { Container } from '@pages/popup/Popup.styled';
import { Stack, Text } from '@shoplflow/base';

const Error = () => {
  return (
    <Container>
      <Text typography={'body1_700'}>웹 요소를 정상적으로 불러오지 못했어요.</Text>

      <Stack align={'center'} spacing={'spacing04'}>
        <Text typography={'body2_500'}>웹 브라우저를 새로고침 해주세요.</Text>
        <Text typography={'caption_400'}>Window: &quot; ctrl + R &quot;</Text>
        <Text typography={'caption_400'}>Mac: &quot; command + R &quot;</Text>
      </Stack>
    </Container>
  );
};

export default Error;
