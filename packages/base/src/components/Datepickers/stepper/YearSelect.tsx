import SimpleBarReact from 'simplebar-react';
import { Container, OptionList, OptionListItem } from './Year.styled';

import React, { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '@shoplflow/utils';

export type YearSelectProps = {
  optionList: Array<{ value: number; label: string }>;
  className?: string;
  parentClassName?: string;
  activeValue?: number;
  maxHeight?: string;
  onClose?: () => void;
  onClick: (item: { value: number; label: string }) => void;
};

const YearSelect = ({ optionList, className, parentClassName, activeValue, maxHeight, onClick }: YearSelectProps) => {
  const optionListRef = useRef<Array<null | HTMLLIElement>>([]);
  const parentRef = useRef<HTMLUListElement>(null);

  const [isAllRefMounted, setIsAllRefMounted] = useState<boolean>(false);
  const [isOpened, setIsOpened] = useOutsideClick({
    selector: `.${parentClassName}` || '',
  });

  useEffect(() => {
    setIsOpened(isOpened);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const height = Math.min((optionList?.length ?? 0) * 32, Number(parseInt(maxHeight || '0')));

  useEffect(() => {
    if (!isAllRefMounted || !activeValue || !maxHeight) {
      return;
    }

    const selectedOptionIndex = optionList.findIndex((option) => option?.value === activeValue);

    const heightPerOption = optionListRef.current[selectedOptionIndex]?.offsetHeight ?? 0;
    const parentHeight = optionListRef.current[selectedOptionIndex]?.closest('ul')?.clientHeight ?? 0;

    if (heightPerOption * (selectedOptionIndex + 1) >= parentHeight) {
      parentRef.current?.scrollTo({ top: heightPerOption * selectedOptionIndex });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllRefMounted, activeValue, maxHeight]);

  return (
    <Container className={`${parentClassName} ${className}`}>
      <OptionList ref={parentRef} maxHeight={maxHeight} style={{ height }} className={className}>
        <SimpleBarReact
          style={{
            maxHeight,
            height,
          }}
          placeholder={undefined}
          className={className}
        >
          {optionList?.map((option, index) => (
            <OptionListItem
              key={option.value}
              onClick={(event) => {
                event.stopPropagation();
                onClick(option);
              }}
              isActive={activeValue === option.value}
              ref={(el) => {
                optionListRef.current[index] = el;
                index + 1 === optionList.length && setIsAllRefMounted(true);
              }}
              className={className}
            >
              {option.label}
            </OptionListItem>
          ))}
        </SimpleBarReact>
      </OptionList>
    </Container>
  );
};

export default YearSelect;
