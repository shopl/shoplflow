import type {Decorator, Preview} from "@storybook/react";
import {ShoplflowProvider} from '@shoplflow/base'
import {useState} from "react";
import styled from "@emotion/styled";


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
  const [domain, setDomain] = useState<'HADA'|'SHOPL'>('HADA');
  const handleToggleTheme = () => {
    setDomain(domain === 'HADA' ? 'SHOPL' : 'HADA')
  }

  return (
    <>
      <ShoplflowProvider domain={domain}>
        <Story />
        <ThemeButton onClick={handleToggleTheme}>{domain}</ThemeButton>
      </ShoplflowProvider>
    </>
  )
}


export const decorators:Decorator[] = [decorator];


export default preview;
