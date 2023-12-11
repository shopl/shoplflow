import React from 'react';
import styled from '@emotion/styled';

import type { Decorator } from '@storybook/react';
import { Button, ShoplflowProvider } from '../src';
import './index.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
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
  width: 100%;
  height: 100%;
  padding: 20px;
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

          <Container >
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

