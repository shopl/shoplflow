import React from 'react';
import styled from '@emotion/styled';

import type { Decorator } from '@storybook/react';
import { Button, ShoplflowProvider } from '../src';
import './index.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
// Simplebar css 설정, 사용하는 컨슈머에도 해당 css import가 필요함
import 'simplebar-react/dist/simplebar.min.css';

import { StoryDomainContext, useStoryDomain } from './useStoryDomain';
import { withPerformance } from 'storybook-addon-performance';


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







export const decorator: Decorator = (Story, context) => {
const domainContext = useStoryDomain();

  return (
    <StoryDomainContext.Provider value={domainContext}>
      <ShoplflowProvider domain={domainContext.domain}>

          <ThemeButton>
            <Button onClick={domainContext.handleToggleTheme} sizeVar={'S'}>{domainContext.domain}</Button>
          </ThemeButton>

          <Container id={'component-root'}>
              <Story />
          </Container>
      </ShoplflowProvider>
    </StoryDomainContext.Provider>
  )
}


export const decorators:Decorator[] = [decorator, withPerformance];

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    a11y: {
      element: '#component-root',
      manual: true,
      config: {
        rules: [
          {
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
    },
}

