import React from 'react';
import figma from '@figma/code-connect';
import Callout from './Callout';
import { Stack } from '../Stack';
import { AlertIcon } from '@shoplflow/shopl-assets';

figma.connect(Callout, 'https://www.figma.com/design/KBxc4vIDtpSu2JlE4tKYIx/--26--Shopl-Flow?node-id=284%3A4625', {
  props: {
    styleVar: figma.enum('styleVar', {
      notice: 'INFORMATION',
      caution: 'CAUTION',
      danger: 'ALERT',
    }),
    icon: figma.boolean('icon', {
      true: <Callout.Icon iconSource={AlertIcon} />,
      false: undefined,
    }),
    description: figma.boolean('Description', {
      true: <Callout.Text>첫 번째 안내 문구입니다.</Callout.Text>,
      false: undefined,
    }),
    bulletListArea: figma.boolean('bulletListArea', {
      true: (
        <>
          <Callout.BulletList>
            <Callout.Text>첫 번째 불릿 항목입니다.</Callout.Text>
          </Callout.BulletList>
          <Callout.BulletList>
            <Callout.Text>두 번째 불릿 항목입니다.</Callout.Text>
          </Callout.BulletList>
          <Callout.BulletList>
            <Callout.Text>세 번째 불릿 항목입니다.</Callout.Text>
          </Callout.BulletList>
        </>
      ),
      false: undefined,
    }),
  },
  example: ({ styleVar, icon, description, bulletListArea }) => (
    <Callout styleVar={styleVar} fillWidth>
      {icon}
      <Stack.Vertical spacing='spacing04'>
        {description}
        {bulletListArea}
        <Callout.Text>마지막 요약 문구입니다.</Callout.Text>
      </Stack.Vertical>
    </Callout>
  ),
});
