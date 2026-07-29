import SimpleBarReact from 'simplebar-react';
import { Container, OptionList, OptionListItem } from './Year.styled';

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { useOutsideClick } from '@shoplflow/utils';

// SimpleBarReact의 타입을 가져오는 함수 > SimpleBarCore가 라이브러리에서 export 되지 않아서 해당 타입이 필요합니다.
type GetSimpleBarCore<T> =
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  T extends React.ForwardRefExoticComponent<infer Not & React.RefAttributes<infer Core | null>> ? Core : never;

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
  // NOTICE: 미사용, 추후 삭제
  const parentRef = useRef<HTMLDivElement>(null);
  const simpleBarContentRef = useRef<GetSimpleBarCore<typeof SimpleBarReact>>(null);

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

    if (selectedOptionIndex < 0) {
      return;
    }

    const scrollElement = simpleBarContentRef.current?.getScrollElement();
    const heightPerOption = optionListRef.current[selectedOptionIndex]?.offsetHeight ?? 0;
    // NOTICE: 노출 영역의 높이는 실제 스크롤 컨테이너(SimpleBar viewport) 기준으로 측정해야 합니다.
    // 내부 마크업(ul 등)은 콘텐츠 전체 높이를 가지므로 기준으로 삼으면 스크롤 조건이 성립하지 않습니다.
    const visibleHeight = scrollElement?.clientHeight ?? 0;

    if (!scrollElement || !heightPerOption || !visibleHeight) {
      return;
    }

    if (heightPerOption * (selectedOptionIndex + 1) > visibleHeight) {
      scrollElement.scrollTo({ top: heightPerOption * selectedOptionIndex });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAllRefMounted, activeValue, maxHeight]);

  return (
    <Container className={`${parentClassName} ${className}`} data-component='year-select'>
      <OptionList ref={parentRef} maxHeight={maxHeight} style={{ height }} className={className}>
        <SimpleBarReact
          style={{
            maxHeight,
            height,
          }}
          ref={simpleBarContentRef}
          className={className}
        >
          <ul>
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
          </ul>
        </SimpleBarReact>
      </OptionList>
    </Container>
  );
};

export default YearSelect;
