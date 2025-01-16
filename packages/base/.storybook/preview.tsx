import React from 'react';
import styled from '@emotion/styled';

import { Button, ShoplflowProvider } from '../src';
import './index.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
// Simplebar css 설정, 사용하는 컨슈머에도 해당 css import가 필요함
import 'simplebar-react/dist/simplebar.min.css';
import { Preview } from '@storybook/react';
import { StoryDomainContext, useStoryDomain } from './useStoryDomain';

const ThemeButton  = styled.div`
  position: fixed;
  right: 10px;
  bottom: 10px
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
  decorators: [
    (Story) => {
      const domainContext = useStoryDomain();
      return (<StoryDomainContext.Provider value={domainContext}>
      <ShoplflowProvider domain={domainContext.domain}>

          <ThemeButton>
            <Button onClick={domainContext.handleToggleTheme} sizeVar={'S'}>{domainContext.domain}</Button>
          </ThemeButton>

          <Container id={'component-root'}>
              <Story />
          </Container>
      </ShoplflowProvider>
    </StoryDomainContext.Provider>)
    }
  ],
};

export default preview;
