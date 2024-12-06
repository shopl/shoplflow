import React, { useState } from 'react';

import type { StoryFn } from '@storybook/react';
import { Stack } from '../Stack';
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from './Command';
import type { CommandProps } from './Command.types';
import { Popper, PopperTrigger } from '../Popper';
import { Text } from '../Text';

export default {
  title: 'COMPONENTS/Command',
  component: Command,
};

export const Playground: StoryFn<CommandProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Stack>
      <Popper>
        <Command className='rounded-lg border shadow-md w-[64px] md:min-w-[60px]'>
          <PopperTrigger isOpen={true}>
            <CommandInput
              placeholder='입력'
              onFocus={() => {
                setIsOpen(true);
              }}
              isOpen={isOpen}
              onBlur={() => {
                setIsOpen(false);
              }}
            />
          </PopperTrigger>
          <Popper.Portal>
            <CommandList className='w-[64px]'>
              <CommandEmpty>No results found.</CommandEmpty>

              <CommandItem value='calendar'>
                <Text typography='caption_400' lineClamp={2}>
                  Calendar
                </Text>
              </CommandItem>
              <CommandItem value='emoji'>
                <Text typography='caption_400' lineClamp={2}>
                  Search Emoji
                </Text>
              </CommandItem>
              <CommandItem disabled value='calculator'>
                <Text typography='caption_400' lineClamp={2}>
                  Calculator
                </Text>
              </CommandItem>

              <CommandItem value='profile'>
                <Text typography='caption_400' lineClamp={2}>
                  Profile
                </Text>
              </CommandItem>
              <CommandItem value='billing'>
                <Text typography='caption_400' lineClamp={2}>
                  Billing
                </Text>
              </CommandItem>
              <CommandItem value='settings'>
                <Text typography='caption_400' lineClamp={2}>
                  Settings
                </Text>
              </CommandItem>

              <CommandItem value='test1'>
                <Text typography='caption_400' lineClamp={2}>
                  test1
                </Text>
              </CommandItem>
              <CommandItem value='test2'>
                <Text typography='caption_400' lineClamp={2}>
                  test2
                </Text>
              </CommandItem>
              <CommandItem value='test3'>
                <Text typography='caption_400' lineClamp={2}>
                  test3
                </Text>
              </CommandItem>
              <CommandItem value='test4'>
                <Text typography='caption_400' lineClamp={2}>
                  test4
                </Text>
              </CommandItem>
              <CommandItem value='test5'>
                <Text typography='caption_400' lineClamp={2}>
                  test5
                </Text>
              </CommandItem>
              <CommandItem value='test6'>
                <Text typography='caption_400' lineClamp={2}>
                  test6
                </Text>
              </CommandItem>
              <CommandItem value='test7'>
                <Text typography='caption_400' lineClamp={2}>
                  test7
                </Text>
              </CommandItem>
              <CommandItem value='test8'>
                <Text typography='caption_400' lineClamp={2}>
                  test8
                </Text>
              </CommandItem>
              <CommandItem value='test9'>
                <Text typography='caption_400' lineClamp={2}>
                  test9
                </Text>
              </CommandItem>
              <CommandItem value='test10'>
                <Text typography='caption_400' lineClamp={2}>
                  test10
                </Text>
              </CommandItem>
              <CommandItem value='test11'>
                <Text typography='caption_400' lineClamp={2}>
                  test11
                </Text>
              </CommandItem>
              <CommandItem value='test12'>
                <Text typography='caption_400' lineClamp={2}>
                  test12
                </Text>
              </CommandItem>
            </CommandList>
          </Popper.Portal>
        </Command>
      </Popper>
    </Stack>
  );
};
