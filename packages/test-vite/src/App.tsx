import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';

function App() {
  const [count, setCount] = useState(0);
  const theme = useTheme();

  console.log(theme);

  const SomeComponent = styled.div`
    color: ${({ theme }) => theme.colors.hada300};
  `;

  return (
    <>
      <div>
        <SomeComponent>adsads</SomeComponent>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
