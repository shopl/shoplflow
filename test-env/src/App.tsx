import React, { useState } from 'react';
import './App.css';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Modal, useHandleModal, ChipToggle, Stack, Text } from '@shoplflow/base';

const TestModal = () => {
  const { removeModal, addModal } = useHandleModal();
  const array = new Array(200).fill(0);
  return (
    <Modal.Container>
      <Modal.Header>Header</Modal.Header>
      <Modal.Body>
        <button
          onClick={() =>
            removeModal({
              deps: 0,
            })
          }
        >
          remove deps
        </button>
        <button
          onClick={() =>
            removeModal({
              id: 'TestModal',
            })
          }
        >
          remove id
        </button>
        <button onClick={() => addModal(<TestModal />)}>add</button>
        {array.map((_, index) => (
          <ChipToggle text={'Toggle' + index} key={index} />
        ))}
      </Modal.Body>
      <Modal.Footer>Footer</Modal.Footer>
    </Modal.Container>
  );
};

function App() {
  const [count, setCount] = useState(0);

  const { addModal } = useHandleModal();

  return (
    <Stack.Vertical align={'center'}>
      <Stack.Horizontal width={'100%'} justify={'center'}>
        <a href='https://vitejs.dev' target='_blank' rel='noreferrer noopener'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank' rel='noreferrer noopener'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </Stack.Horizontal>
      <h1 className={'heading1_700'}>Shoplflow Test Env</h1>
      <Text>some Test</Text>
      <Stack.Vertical align={'center'}>
        <Stack.Horizontal justify={'center'}>
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
          <button onClick={() => addModal(<TestModal />, 'TestModal')}>addModal</button>
        </Stack.Horizontal>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Stack.Vertical>
    </Stack.Vertical>
  );
}

export default App;
