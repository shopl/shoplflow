import styled from '@emotion/styled';

import { Button, ShoplflowProvider } from '../src';
import './index.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
// Simplebar css 설정, 사용하는 컨슈머에도 해당 css import가 필요함
import 'simplebar-react/dist/simplebar.min.css';
import type { Preview } from '@storybook/react-vite';
import { StoryDomainContext, useStoryDomain } from './useStoryDomain';

const ThemeButton = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    // test-runner에서 a11y 검사 비활성화 (위반 시 메시지만 출력되고 테스트는 통과).
    // 접근성 검사를 실패로 막으려면 'error'로 변경하세요.
    a11y: { test: 'off' },
    // iframe 내 스토리 실행 시 test-runner가 Window 직렬화(toJSON) 시도 시 cross-origin 오류가 발생함. 해당 미처리 오류 무시.
    test: { dangerouslyIgnoreUnhandledErrors: true },
  },
  decorators: [
    (Story) => {
      const domainContext = useStoryDomain();
      return (
        <StoryDomainContext.Provider value={domainContext}>
          <ShoplflowProvider domain={domainContext.domain}>
            <ThemeButton>
              <Button onClick={domainContext.handleToggleTheme} sizeVar={'S'}>
                {domainContext.domain}
              </Button>
            </ThemeButton>

            <Container id={'component-root'}>
              <Story />
            </Container>
          </ShoplflowProvider>
        </StoryDomainContext.Provider>
      );
    },
  ],
};

export default preview;
