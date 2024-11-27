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
import { Text } from '../../Text';

type YearStepperProps = Pick<
  DayDatepickerHeaderCustomProps,
  | 'date'
  | 'decreaseYear'
  | 'prevYearButtonDisabled'
  | 'nextYearButtonDisabled'
  | 'increaseYear'
  | 'changeYear'
  | 'minDate'
  | 'maxDate'
  | 'className'
>;

const YearStepper = ({
  date,
  decreaseYear,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
  increaseYear,
  changeYear,
  minDate,
  maxDate,
  className,
}: YearStepperProps) => {
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: '.react-datepicker-year-stepper',
  });

  const startYear = minDate ? minDate.getFullYear() : 2000;
  const endYear = maxDate ? maxDate.getFullYear() : 2100;

  const OptionList = useMemo(
    () =>
      Array.from({ length: endYear - startYear + 1 })
        .fill(0)
        .map((_, index) => ({ value: startYear + index, label: `${startYear + index}` })),
    [startYear, endYear],
  );

  return (
    <Header className={`calendarHeader ${className}`}>
      <IconButton
        styleVar='GHOST'
        sizeVar='S'
        onClick={decreaseYear}
        disabled={prevYearButtonDisabled || date.getFullYear() === startYear}
      >
        <Icon iconSource={LeftArrowIcon} sizeVar='XS' color={prevYearButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
      <Popper placement='bottom' middlewares={[flip(), shift({ padding: 5 })]}>
        <Popper.Trigger isOpen={isOpen}>
          <Month
            className={`react-datepicker-year-stepper ${className}`}
            onClick={(event) => {
              event.stopPropagation();
              setIsOpen((prev) => !prev);
            }}
          >
            <Text typography='title1_700'>{`${date.getFullYear()}`}</Text>
          </Month>
        </Popper.Trigger>
        <Popper.Portal>
          <YearSelect
            className={`react-datepicker-year-stepper ${className}`}
            optionList={OptionList}
            onClick={({ value }) => {
              changeYear(value);
              setIsOpen(false);
            }}
            parentClassName={`react-datepicker-year-stepper ${className}`}
            maxHeight={`200px`}
            activeValue={date.getFullYear()}
          />
        </Popper.Portal>
      </Popper>

      <IconButton
        styleVar='GHOST'
        sizeVar='S'
        onClick={increaseYear}
        disabled={nextYearButtonDisabled || date.getFullYear() === endYear}
      >
        <Icon iconSource={RightArrowIcon} sizeVar='XS' color={nextYearButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
    </Header>
  );
};

export default YearStepper;
