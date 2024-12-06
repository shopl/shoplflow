import type { ComboboxProps } from './Combobox.types';

import { Command, CommandInput, CommandItem, CommandList } from '../Command';
import { Popper } from '../Popper';
import { Text } from '../Text';
import { useOutsideClick } from '@shoplflow/utils';
import { useRef } from 'react';

const Combobox = ({ ...rest }: ComboboxProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-combobox`).current;

  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  return (
    <Popper>
      <Command className={`rounded-lg shadow-md w-[64px] h-10 ${selector}`} {...rest}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <CommandInput
            placeholder='0'
            onBlur={() => {
              setIsOpen(false);
            }}
            onOpen={() => {
              setIsOpen((prev) => !prev);
            }}
            isOpen={isOpen}
            className={selector}
          />
        </Popper.Trigger>
        <Popper.Portal className={selector}>
          <CommandList className={`w-[64px] ${selector}`}>
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
  );
};

export default Combobox;
