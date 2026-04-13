import { Month, Header } from './Stepper.styled';
import type { DayDatepickerHeaderCustomProps } from '../DayDatepicker/DayDatepicker.types';
import { Icon } from '../../Icon';
import { LeftArrowIcon, RightArrowIcon, LeftArrowXsmallIcon, RightArrowXsmallIcon } from '@shoplflow/shopl-assets';
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
> & {
  sizeVar?: 'S' | 'M';
};

const YearStepper = ({
  date,
  decreaseYear,
  prevYearButtonDisabled,
  nextYearButtonDisabled,
  increaseYear,
  changeYear,
  minDate,
  maxDate,
  sizeVar = 'M',
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
        .map((_, index) => ({ value: startYear + index, label: `${startYear + index}` }))
        .sort((a, b) => b.value - a.value),
    [startYear, endYear],
  );

  return (
    <Header className={`calendarHeader ${className}`}>
      <IconButton
        styleVar='GHOST'
        sizeVar={sizeVar === 'S' ? 'XS' : 'S'}
        onClick={decreaseYear}
        disabled={prevYearButtonDisabled || date.getFullYear() === startYear}
        iconSizeVar={sizeVar === 'S' ? 'XS' : 'S'}
      >
        <Icon
          iconSource={sizeVar === 'S' ? LeftArrowXsmallIcon : LeftArrowIcon}
          color={prevYearButtonDisabled ? 'neutral200' : 'neutral700'}
        />
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
            <Text typography={sizeVar === 'M' ? 'title1_700' : 'body1_700'}>{`${date.getFullYear()}`}</Text>
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
        sizeVar={sizeVar === 'S' ? 'XS' : 'S'}
        onClick={increaseYear}
        disabled={nextYearButtonDisabled || date.getFullYear() === endYear}
        iconSizeVar={sizeVar === 'S' ? 'XS' : 'S'}
      >
        <Icon
          iconSource={sizeVar === 'S' ? RightArrowXsmallIcon : RightArrowIcon}
          color={nextYearButtonDisabled ? 'neutral200' : 'neutral700'}
        />
      </IconButton>
    </Header>
  );
};

export default YearStepper;
