import type { MotionProps } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import type { StoryFn } from '@storybook/react';
import React, { useState } from 'react';
import { Stack, Text } from '../components';
import { Box, ComponentStage } from '../styles/Box';
import styled from '@emotion/styled';

export default {
  title: 'COMPONENTS/motion',
  component: motion.div,
};

const Range = styled.input`
  height: 25px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
  transition: all 0.2s ease-in-out;
  &:focus {
    outline: none;
  }
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000;
    background: var(--primary200);
    border-radius: 10px;
    border: 0px solid #000000;
  }
  &::-webkit-slider-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid var(--primary400);
    height: 16px;
    width: 16px;
    border-radius: 25px;
    background: var(--primary200);
    cursor: pointer;
    -webkit-appearance: none;
    margin-top: -6px;
  }
  &:focus::-webkit-slider-runnable-track {
    background: var(--primary100);
  }
  &::-moz-range-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    box-shadow: 0px 0px 0px #000000;
    background: var(--primary100);
    border-radius: 1px;
    border: 0px solid #000000;
  }
  &::-moz-range-thumb {
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid #2497e3;
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
  }
  &::-ms-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  &::-ms-fill-lower {
    background: var(--primary100);
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-fill-upper {
    background: var(--primary100);
    border: 0px solid #000000;
    border-radius: 2px;
    box-shadow: 0px 0px 0px #000000;
  }
  &::-ms-thumb {
    margin-top: 1px;
    box-shadow: 0px 0px 0px #000000;
    border: 1px solid var(--primary200);
    height: 18px;
    width: 18px;
    border-radius: 25px;
    background: #a1d0ff;
    cursor: pointer;
  }
  &:focus::-ms-fill-lower {
    background: var(--primary100);
  }
  &:focus::-ms-fill-upper {
    background: var(--primary400);
  }
`;

export const Playground: StoryFn<MotionProps> = () => {
  const [controls, setControls] = useState({
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    opacity: 1,
    duration: 0.2,
  });

  const animation = Object.keys(controls) as Array<keyof typeof controls>;

  const animateRange: Record<
    keyof typeof controls,
    {
      min: number;
      max: number;
    }
  > = {
    x: {
      min: -300,
      max: 300,
    },
    y: {
      min: -300,
      max: 300,
    },
    scale: {
      min: 0,
      max: 5,
    },
    rotate: {
      min: 0,
      max: 360,
    },
    opacity: {
      min: 0,
      max: 1,
    },
    duration: {
      min: 0.1,
      max: 3,
    },
  };
  const motionCode =
    '<motion.div\n' +
    '    animate={{\n' +
    `        x: ${controls.x},\n` +
    `        y: ${controls.y},\n` +
    `        opacity: ${controls.opacity},\n` +
    `        scale: ${controls.scale},\n` +
    `        rotate: ${controls.rotate},\n` +
    `        transition: {\n` +
    `            duration: ${controls.duration},\n` +
    '        },\n' +
    '    }}\n' +
    '/>';

  return (
    <Stack.Vertical width={'800px'} height={'600px'} spacing={'spacing24'}>
      <Stack.Horizontal width={'100%'} height={'100%'} justify={'start'} align={'start'} spacing={'spacing24'}>
        <ComponentStage>
          <AnimatePresence>
            <Box background={'primary300'} width={'100px'} height={'100px'} animate={controls} />
          </AnimatePresence>
        </ComponentStage>
        <ComponentStage width={'300px'}>
          <pre>{motionCode}</pre>
        </ComponentStage>
      </Stack.Horizontal>
      <ComponentStage>
        <Stack height={'100%'} width={'100%'} spacing={'spacing04'}>
          {animation.map((item) => {
            return (
              <Stack.Vertical key={item} width={'100%'}>
                <Text typography={'body1_700'}>
                  {item}: {controls[item]}
                </Text>
                <Stack.Horizontal width={'100%'}>
                  <Range
                    style={{
                      width: '100%',
                    }}
                    type={'range'}
                    min={animateRange[item].min}
                    max={animateRange[item].max}
                    step={0.1}
                    value={controls[item]}
                    onChange={(e) => {
                      setControls((prev) => ({
                        ...prev,
                        [item]: Number(e.target.value),
                      }));
                    }}
                  />
                </Stack.Horizontal>
              </Stack.Vertical>
            );
          })}
        </Stack>
      </ComponentStage>
    </Stack.Vertical>
  );
};

export const Animate: StoryFn<MotionProps> = (args) => {
  return (
    <Stack.Vertical width={'800px'} height={'600px'} spacing={'spacing24'}>
      <ComponentStage>
        <AnimatePresence>
          <Box background={'primary300'} width={'100px'} height={'100px'} {...args} />
        </AnimatePresence>
      </ComponentStage>
      <ComponentStage>
        <Stack.Horizontal width={'100%'} height={'100%'} justify={'start'} align={'start'} spacing={'spacing24'}>
          <Stack.Vertical width={'100%'}>
            <Text typography={'body1_700'}>initial</Text>
            <pre>{JSON.stringify(args.initial, null, 2)}</pre>
          </Stack.Vertical>
          <Stack.Vertical width={'100%'}>
            <Text typography={'body1_700'}>animate</Text>
            <pre>{JSON.stringify(args.initial, null, 2)}</pre>
          </Stack.Vertical>
          <Stack.Vertical width={'100%'}>
            <Text typography={'body1_700'}>exit</Text>
            <pre>{JSON.stringify(args.initial, null, 2)}</pre>
          </Stack.Vertical>
        </Stack.Horizontal>
      </ComponentStage>
    </Stack.Vertical>
  );
};
