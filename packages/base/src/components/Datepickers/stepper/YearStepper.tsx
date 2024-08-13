import { Month, Header } from './Stepper.styled';
import type { DayDatepickerHeaderCustomProps } from '../DayDatepicker/DayDatepicker.types';
import { Icon } from '../../Icon';
import { LeftArrowIcon, RightArrowIcon } from '@shoplflow/shopl-assets';
import { IconButton } from '../../Buttons';
import { useOutsideClick } from '@shoplflow/utils';
import { Popper } from '../../Popper';
import { flip, shift } from '@floating-ui/core';
import YearSelect from './YearSelect';
import { useMemo } from 'react';

type YearStepperProps = Pick<
  DayDatepickerHeaderCustomProps,
  'date' | 'decreaseYear' | 'prevYearButtonDisabled' | 'nextYearButtonDisabled' | 'increaseYear' | 'changeYear'
> & {
  /**
   * 시작년도 (옵션 리스트 시작년도)
   */
  startYear: number;
  /**
   * 마지막년도 (옵션 리스트 마지막년도)
   */
  endYear: number;
};

const YearStepper = ({
  date,
  decreaseYear,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
  increaseYear,
  changeYear,
  startYear,
  endYear,
}: YearStepperProps) => {
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: '.react-datepicker-year-stepper',
  });

  const OptionList = useMemo(
    () =>
      Array.from({ length: endYear - startYear })
        .fill(0)
        .map((_, index) => ({ value: startYear + index, label: `${startYear + index}` })),
    [startYear, endYear],
  );

  return (
    <Header className='calendarHeader'>
      <IconButton styleVar='GHOST' sizeVar='S' onClick={decreaseYear} disabled={prevYearButtonDisabled}>
        <Icon iconSource={LeftArrowIcon} sizeVar='XS' color={prevYearButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
      <Popper placement='bottom' middlewares={[flip(), shift({ padding: 5 })]}>
        <Popper.Trigger isOpen={isOpen}>
          <Month
            className='react-datepicker-year-stepper'
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
          >
            {`${date.getFullYear()}`}
          </Month>
        </Popper.Trigger>
        {/* {isOpen && ( */}
        <Popper.Portal>
          <YearSelect
            className='react-datepicker-year-stepper'
            optionList={OptionList}
            onClick={({ value }) => {
              changeYear(value);
              setIsOpen(false);
            }}
            parentClassName='react-datepicker-year-stepper'
            maxHeight={`200px`}
            activeValue={date.getFullYear()}
          />
        </Popper.Portal>
        {/* )} */}
      </Popper>

      <IconButton styleVar='GHOST' sizeVar='S' onClick={increaseYear} disabled={nextYearButtonDisabled}>
        <Icon iconSource={RightArrowIcon} sizeVar='XS' color={nextYearButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
    </Header>
  );
};

export default YearStepper;
