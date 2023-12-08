import { ScrollArea, Stack, Text } from '../components';
import { Code } from './Box';
import React from 'react';
import { AnimatePresence } from 'framer-motion';

interface JSONViewerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: Array<Record<string, any>>;
}

export const JSONScrollView = ({ items }: JSONViewerProps) => {
  return (
    <ScrollArea>
      <Stack.Vertical as={'ul'}>
        <AnimatePresence mode={'popLayout'}>
          {items.map((item) => {
            return (
              <Code
                layout
                key={JSON.stringify(item)}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                exit={{
                  opacity: 0,
                  x: 10,
                }}
                transition={{
                  duration: 0.3,
                }}
              >
                <Text typography={'body2_400'} color={'neutral600'}>
                  {JSON.stringify(item, null, 2)}
                </Text>
              </Code>
            );
          })}
        </AnimatePresence>
      </Stack.Vertical>
    </ScrollArea>
  );
};
