import React, { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import styled from '@emotion/styled';
import { Modal, useHandleModal } from '@shoplflow/base';

const TestModal = () => {
  const { addModal, removeModal } = useHandleModal();
  return (
    <Modal.Container
      outsideClick={() =>
        removeModal({
          deps: 1,
        })
      }
    >
      <Modal.Header>Header</Modal.Header>
      <Modal.Body>
        <button onClick={() => addModal(<TestModal />)}>addModal</button>
      </Modal.Body>
      <Modal.Footer>Footer</Modal.Footer>
    </Modal.Container>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const SomeText = styled.div`
    color: var(--primary400);
    box-shadow: var(--dropShadow);
  `;

  const { addModal } = useHandleModal();

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer noopener'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <SomeText>Some Text</SomeText>
      <h1 className={'heading1_700'}>Vite + React</h1>

      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={() => addModal(<TestModal />)}>addModal</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
