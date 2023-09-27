import styled from "@emotion/styled";

import type { Decorator, Preview } from "@storybook/react";
import { useState } from "react";
import {ShoplflowProvider} from "../src";
import './index.css';
import '../src/styles/global.css'




const ThemeButton  = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px
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
  const [domain, setDomain] = useState<'HADA'|'SHOPL'>('SHOPL');
  const handleToggleTheme = () => {
    setDomain(domain === 'HADA' ? 'SHOPL' : 'HADA')
  }

  return (
    <>
      <ShoplflowProvider domain={domain}>
        <ThemeButton onClick={handleToggleTheme}>{domain}</ThemeButton>
        <Story />
      </ShoplflowProvider>
    </>
  )
}


export const decorators:Decorator[] = [decorator];


export default preview;
