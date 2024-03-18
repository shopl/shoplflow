import React, { useEffect, useState } from 'react';
import withSuspense from '@src/shared/hoc/withSuspense';
import withErrorBoundary from '@src/shared/hoc/withErrorBoundary';
import '@shoplflow/base/styles';
import { ShoplflowProvider, Stack, Text, ScrollArea, colorTokens } from '@shoplflow/base';
import { ArcElement, Chart as ChartJS, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import styled from '@emotion/styled';
import ElementListCard from '@src/Components/ElementListCard';

ChartJS.register(ArcElement, Tooltip);

const Card = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
  width: fit-content;
  background: ${colorTokens.neutral150};
  padding: 20px;
  border-radius: 10px;
`;

const TableWrapper = styled(Card)`
  width: 100%;
  padding: 12px 8px;
`;

const Popup = () => {
  const [{ systems, components, systemElement }, setData] = useState({
    systems: 0,
    components: 0,
    systemElement: {},
  });

  useEffect(() => {
    (async () => {
      await chrome.storage.local.get(['systems', 'components', 'systemElement'], (result) => setData(result));
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
  const sortedSystemElement = Object.keys(systemElement).sort((a, b) => systemElement[b] - systemElement[a]);

  return (
    <ShoplflowProvider>
      <Stack.Vertical width={'500px'} height={'300px'} align={'center'} spacing={'spacing20'}>
        <Stack.Horizontal height={'100%'} width={'100%'} justify={'space-between'} spacing={'spacing16'}>
          <Card>
            <Doughnut data={data} height={150} width={150} />
            <Stack.Vertical width={'100%'} height={'100%'} spacing={'spacing12'} justify={'center'} align={'center'}>
              <Text typography={'body1_700'} whiteSpace={'nowrap'}>
                디자인시스템 교체율 {percentage.toFixed(2)}%
              </Text>
              <Stack.Vertical width={'100%'} height={'100%'} spacing={'spacing06'} justify={'center'} align={'center'}>
                <Stack.Horizontal width={'100%'} justify={'center'} align={'center'} spacing={'spacing04'}>
                  <Text typography={'caption_400'}>전체 요소</Text>
                  <Text typography={'caption_700'} color={'navy300'}>
                    {components}
                  </Text>
                </Stack.Horizontal>
                <Stack.Horizontal width={'100%'} justify={'center'} align={'center'} spacing={'spacing04'}>
                  <Text typography={'caption_400'}>시스템 요소</Text>
                  <Text typography={'caption_700'} color={'primary300'}>
                    {systems}
                  </Text>
                </Stack.Horizontal>
              </Stack.Vertical>
            </Stack.Vertical>
          </Card>
          <TableWrapper>
            <Text
              typography={'body1_700'}
              whiteSpace={'nowrap'}
              style={{
                padding: '4px 12px',
              }}
            >
              시스템 구성 요소
            </Text>
            <ScrollArea>
              <Stack.Vertical spacing={'spacing04'}>
                {sortedSystemElement?.map((key, index) => {
                  const color = {
                    0: 'primary300',
                    1: 'green300',
                    2: 'yellow300',
                  };
                  return <ElementListCard key={key} title={key} value={systemElement[key]} valueColor={color[index]} />;
                })}
              </Stack.Vertical>
            </ScrollArea>
          </TableWrapper>
        </Stack.Horizontal>
      </Stack.Vertical>
    </ShoplflowProvider>
  );
};

export default withErrorBoundary(
  withSuspense(Popup, <div> Loading ... </div>),
  <div>
    <Text typography={'body2_700'} whiteSpace={'nowrap'}>
      샤플 서비스가 아니거나 에러가 발생했어요.
    </Text>
    <Text typography={'body2_700'} whiteSpace={'nowrap'}>
      shoplworks 도메인으로 접속해주세요.
    </Text>
  </div>,
);
