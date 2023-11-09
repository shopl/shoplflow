import React, { useEffect, useState } from 'react';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import '@shoplflow/base/styles';
import { Button, Stack, Text } from '@shoplflow/base';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Container } from '@pages/popup/Popup.styled';
import Error from '@pages/content/components/Demo/Error';

ChartJS.register(Legend, ArcElement, Tooltip);

type SystemData = {
  systems: number;
  components: number;
  elementTagInfoCount: Array<{ tag: string; count: number }>;
  systemTagInfoCount: Array<{ tag: string; count: number }>;
};

const Popup = () => {
  const [{ systems, components, systemTagInfoCount, elementTagInfoCount }, setData] = useState<SystemData>({
    systems: 0,
    components: 0,
    elementTagInfoCount: [],
    systemTagInfoCount: [],
  });
  const [visibleToggle, setVisibleToggle] = useState<'SYSTEM' | 'ALL'>('SYSTEM');

  useEffect(() => {
    (async () => {
      await chrome.storage.local.get(['systems', 'components', 'systemTagInfoCount', 'elementTagInfoCount'], (result) =>
        setData(result as SystemData),
      );
    })();
  }, []);

  const percentage = (systems / components) * 100;

  const data = {
    labels: ['미적용', '적용'],
    datasets: [
      {
        label: '# 컴포넌트 개수',
        data: [components - systems, systems],
        backgroundColor: ['#cccccc', '#84c2fc'],
        borderColor: ['#cccccc', '#3299fe'],
        borderWidth: 1,
      },
    ],
  };

  const rangeData = [
    {
      title: '적용률',
      content: `${percentage.toFixed(2)}%`,
    },
    {
      title: '전체 요소 개수',
      content: `${components}개`,
    },
    {
      title: '시스템 요소 개수',
      content: `${systems}개`,
    },
  ];

  const handleVisibleToggle = () => {
    setVisibleToggle(visibleToggle === 'SYSTEM' ? 'ALL' : 'SYSTEM');
  };

  return (
    <Container>
      <Text typography={'title1_700'}>샤플 디자인 시스템 Analytics</Text>
      <Stack width={'100%'} height={'fit-content'} align={'center'} spacing={'spacing12'}>
        <Stack.Horizontal width={'100%'} justify={'space-around'}>
          {rangeData.map((data, index) => (
            <Stack.Vertical key={index} align={'center'}>
              <Text typography={'body3_500'}>{data.title}</Text>
              <Text typography={'heading2_700'}>{data.content}</Text>
            </Stack.Vertical>
          ))}
        </Stack.Horizontal>
        <Stack.Vertical width={'210px'}>
          <Doughnut data={data} />
        </Stack.Vertical>
        <Button onClick={handleVisibleToggle}>
          {visibleToggle === 'SYSTEM' ? '전체 컴포넌트 정보 보기' : '시스템 컴포넌트 정보 보기'}
        </Button>
        <Stack width={'100%'} align={'center'} spacing={'spacing04'}>
          {(visibleToggle === 'SYSTEM' ? systemTagInfoCount : elementTagInfoCount).map((data, index) => (
            <Stack.Horizontal key={index} width={'200px'} align={'center'} justify={'space-between'}>
              <Text typography={'body1_500'}>{data.tag}</Text>
              <Text typography={'body1_700'}>{data.count}개</Text>
            </Stack.Horizontal>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <Error />);
