import React from 'react';
import styled from '@emotion/styled';

import type { Decorator, Preview } from '@storybook/react';
import { Button, ShoplflowProvider } from '../src';
import './index.css';
import '../src/styles/global.css';
import '../src/styles/reset.css';
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
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};


export const decorator: Decorator = (Story, context) => {
const domainContext = useStoryDomain();

  return (
    <StoryDomainContext.Provider value={domainContext}>
      <ShoplflowProvider domain={domainContext.domain}>
        <Container>
          <ThemeButton>
            <Button onClick={domainContext.handleToggleTheme} sizeVar={'S'}>{domainContext.domain}</Button>
          </ThemeButton>
          <Story />
        </Container>
      </ShoplflowProvider>
    </StoryDomainContext.Provider>
  )
}


export const decorators:Decorator[] = [decorator];


export default preview;
