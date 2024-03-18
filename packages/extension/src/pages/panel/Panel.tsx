import React, { useEffect, useState } from 'react';
import '@pages/panel/Panel.css';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { ShoplflowProvider, Stack, Text } from '@shoplflow/base';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(Legend, ArcElement, Tooltip);
const Panel: React.FC = () => {
  const [{ systems, components, systemElement }, setData] = useState({
    systems: 0,
    components: 0,
  });

  useEffect(() => {
    (async () => {
      await chrome.storage.local.get(['systems', 'components', 'systemElement'], result => setData(result));
    })();
  }, []);

  const percentage = (systems / components) * 100;

  const data = {
    labels: ['HTML 요소', 'shoplflow'],
    datasets: [
      {
        label: '# 컴포넌트 개수',
        data: [components - systems, systems],
        backgroundColor: ['#3eb0b8', '#84c2fc'],
        borderColor: ['#2f839f', '#3299fe'],
        borderWidth: 1,
      },
    ],
  };

  console.log(systemElement);
  return (
    <ShoplflowProvider>
      <Stack.Horizontal width={'100%'} align={'center'} spacing={'spacing20'}>
        <Stack.Vertical height={'fit-content'} width={'200px'}>
          <Doughnut data={data} />
        </Stack.Vertical>
        <Stack.Vertical width={'100%'} justify={'center'} align={'center'} height={'20px'}>
          <Text typography={'title1_700'}>shoplflow 점유율 {percentage.toFixed(2)}%</Text>
          <Stack.Horizontal width={'100%'} justify={'center'} align={'center'} height={'20px'}>
            <Text typography={'caption_400'}>전체 컴포넌트 {components}</Text>
            <Text typography={'caption_400'}>시스템 컴포넌트 {systems}</Text>
          </Stack.Horizontal>
          <Stack.Vertical>
            {Object.keys(systemElement)?.map(key => (
              <Stack.Horizontal key={key} width={'100%'} justify={'center'} align={'center'} height={'20px'}>
                <Text typography={'caption_400'}>{key}</Text>
                <Text typography={'caption_400'}>{systemElement[key]}개</Text>
              </Stack.Horizontal>
            ))}
          </Stack.Vertical>
          <Stack>{JSON.stringify(systemElement)}</Stack>
        </Stack.Vertical>
        <Stack.Vertical width={'100%'} justify={'center'} align={'end'} height={'20px'}>
          <Text typography={'caption_400'}>@shoplflow</Text>
        </Stack.Vertical>
      </Stack.Horizontal>
    </ShoplflowProvider>
  );
};

export default Panel;
