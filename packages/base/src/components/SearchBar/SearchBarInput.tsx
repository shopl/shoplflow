import type { ChangeEvent, KeyboardEvent } from 'react';
import React, { useCallback, useState, useRef } from 'react';
import { SearchIcon } from '@shoplflow/shopl-assets';
import { debounce } from '@shoplflow/utils';
import { Icon } from '../Icon';
import { IconButton } from '../Buttons';
import { Input } from '../Inputs';
import type { SearchBarInputProps } from './SearchBar.types';
import { useSearchBarContext } from './SearchBarContext';

const DEFAULT_DEBOUNCE_TIME = 300;

export const SearchBarInput: React.FC<SearchBarInputProps> = ({
  value,
  onChange,
  onClear,
  placeholder,
  flexiblePlaceholder,
  disabled,
  type = 'default',
  onSearch,
  debounceTime = type === 'default' ? 0 : DEFAULT_DEBOUNCE_TIME,
  icon = <Icon iconSource={SearchIcon} color={'neutral350'} sizeVar={'S'} />,
  maxLength,
  ...rest
}) => {
  const { useFlexibleWidth, isSelected } = useSearchBarContext();
  const [text, setText] = useState('');

  // const convertToString = useCallback((value: string | number | readonly string[]) => {
  //   if (typeof value !== 'number') {
  //     return typeof value === 'string' ? value : value.join('');
  //   }
  //   return String(value);
  // }, []);

  const debouncedOnChange = useRef(
    debounce(
      ((event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        setText(newValue);
        if (type === 'real-time') {
          onChange && onChange(event);
          onSearch && onSearch(newValue);
        }
      }) as (...args: unknown[]) => void,
      debounceTime,
    ),
  ).current;

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    // maxLength 체크
    if (maxLength && newValue.length > maxLength) {
      // maxLength 초과 시 현재 값을 유지
      event.target.value = value === undefined ? text : String(value);
      return;
    }

    // 즉시 내부 state 업데이트 (화면 반영)
    setText(newValue);

    // maxLength에 도달했거나 debounceTime이 0이면 즉시 onChange 호출
    if (debounceTime === 0 || (maxLength && newValue.length === maxLength)) {
      onChange && onChange(event);
    }

    // debounced 처리 (real-time인 경우)
    if (type === 'real-time') {
      debouncedOnChange(event);
    }
  };

  const handleOnClear = useCallback(() => {
    setText('');
    onClear?.();
  }, [onClear]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (type === 'default' && event.key === 'Enter') {
        onSearch?.(text);
      }
    },
    [onSearch, text, type],
  );

  const handleIconClick = useCallback(() => {
    if (type === 'default') {
      onSearch?.(text);
    }
  }, [onSearch, text, type]);

  let _placeholder = placeholder;

  if (useFlexibleWidth && !isSelected) {
    _placeholder = flexiblePlaceholder;
  }

  // const getInitialValue = useCallback(() => {
  //   if (value !== undefined) {
  //     return convertToString(value);
  //   }
  //   if (defaultValue !== undefined) {
  //     return convertToString(defaultValue);
  //   }
  //   return '';
  // }, [convertToString, defaultValue, value]);

  // useEffect(() => {
  //   const initialValue = getInitialValue();
  //   setText(initialValue);
  // }, [getInitialValue]);

  return (
    <>
      {type === 'default' && (
        <IconButton styleVar={'GHOST'} sizeVar={'S'} onClick={handleIconClick} aria-label='검색'>
          <Icon iconSource={SearchIcon} color={text ? 'neutral700' : 'neutral350'} sizeVar={'S'} />
        </IconButton>
      )}
      {type === 'real-time' && icon}
      <Input
        placeholder={_placeholder}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
        value={value === undefined ? text : value}
        onClear={handleOnClear}
        width='100%'
        disabled={disabled}
        aria-label='검색어 입력'
        {...rest}
      />
    </>
  );
};
