import type { ComboboxProps } from './Combobox.types';
import type { Command as CommandPrimitive } from 'cmdk';
import { Command, CommandInput, CommandItem, CommandList } from '../Command';
import { Popper } from '../Popper';
import { Text } from '../Text';
import { useOutsideClick } from '@shoplflow/utils';
import { useRef, useState } from 'react';
import { offset, shift } from '@floating-ui/core';
import { HOURS_TO_CHANGES, MINUTES_TO_CHANGE } from './ComboboxLists';

const Combobox = ({ unit, disabled, sizeVar, inputType, ...rest }: ComboboxProps) => {
  const selector = useRef(`shoplflow-${crypto.randomUUID()}-combobox`).current;
  const inputRef = useRef<React.ElementRef<typeof CommandPrimitive.Input>>(null);
  const [value, setValue] = useState('');
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: `.${selector}`,
    useOutsideScroll: true,
  });

  const click = () => {
    if (!isOpen && inputRef) {
      inputRef.current?.focus();
    }

    if (isOpen && inputRef) {
      inputRef.current?.blur();
    }

    setIsOpen((prev) => !prev);
  };

  let items = inputType === 'hours' ? HOURS_TO_CHANGES : MINUTES_TO_CHANGE;

  if (unit) {
    items = items.filter((item) => Number(item.value) % unit === 0);
  }

  const values = items.map((item) => item.value);

  return (
    <Popper middlewares={[shift({ padding: 4 }), offset(4)]}>
      <Command className={`rounded-md w-[90px] h-10 ${selector}`} {...rest}>
        <Popper.Trigger isOpen={isOpen} className={selector}>
          <CommandInput
            placeholder='0'
            onOpen={click}
            isOpen={isOpen}
            className={selector}
            ref={inputRef}
            value={value}
            onValueChange={(value) => {
              setValue(value);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                const currentValue = event.currentTarget.value;
                if (values.includes(currentValue)) {
                  setValue(currentValue);
                  setIsOpen(false);
                  inputRef.current?.blur();
                  return;
                } else {
                  setValue('');
                  setIsOpen(false);
                  inputRef.current?.blur();
                }
              }
            }}
            onBlur={(event) => {
              const currentValue = event.currentTarget.value;
              const target = event.target;
              const isNested = Boolean(target.closest(`.${selector}`));

              if (isNested) {
                return;
              }

              if (values.includes(currentValue)) {
                setValue(currentValue);
                setIsOpen(false);
                return;
              }
              setValue('');
              setIsOpen(false);
            }}
            disabled={disabled}
            sizeVar={sizeVar}
          />
        </Popper.Trigger>
        <Popper.Portal className={selector}>
          <CommandList className={`w-[90px] rounded-md ${selector} shadow-md `}>
            {items?.map((item) => (
              <CommandItem
                value={item.value}
                key={item.value}
                onSelect={(currentValue) => {
                  if (values.includes(currentValue)) {
                    setValue(currentValue);
                    setIsOpen(false);
                    inputRef.current?.blur();
                    return;
                  }

                  setValue('');
                  inputRef.current?.blur();
                  setIsOpen(false);
                }}
              >
                <Text typography='body1_400' lineClamp={2}>
                  {item.label}
                </Text>
              </CommandItem>
            ))}
          </CommandList>
        </Popper.Portal>
      </Command>
    </Popper>
  );
};

export default Combobox;
