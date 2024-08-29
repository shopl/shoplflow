import { DatePickerWrapper, Month, Header } from './Stepper.styled';
import type { DayDatepickerHeaderCustomProps } from '../DayDatepicker/DayDatepicker.types';
import DatePicker from 'react-datepicker';
import { Icon } from '../../Icon';
import { LeftArrowIcon, RightArrowIcon } from '@shoplflow/shopl-assets';
import { IconButton } from '../../Buttons';
import { useOutsideClick } from '@shoplflow/utils';
import YearStepper from './YearStepper';
import { ko } from 'date-fns/locale';
import { Text } from '../../Text';

type MonthStepperProps = DayDatepickerHeaderCustomProps & { sizeVar: 'S' | 'M' };

const MonthStepper = ({
  date,
  monthDate,
  decreaseMonth,
  increaseMonth,
  changeYear,
  changeMonth,
  minDate,
  maxDate,
  locale,
  sizeVar,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: MonthStepperProps) => {
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: '.react-datepicker__header',
  });

  return (
    <Header className='calendarHeader'>
      <IconButton styleVar='GHOST' sizeVar='S' onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        <Icon iconSource={LeftArrowIcon} sizeVar='XS' color={prevMonthButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
      <Month
        className='react-datepicker__header'
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <Text typography={sizeVar === 'M' ? 'title1_700' : 'body1_700'}>{`${date.getFullYear()}.${
          monthDate.getMonth() + 1
        }`}</Text>
      </Month>
      {isOpen && (
        <DatePickerWrapper>
          <div className='datepicker-header-wrapper'>
            <DatePicker
              className='datepicker-custom-month'
              onChange={(date) => {
                if (!date) {
                  return;
                }
                changeYear && changeYear(date.getFullYear());
                changeMonth && changeMonth(date.getMonth());
                setIsOpen(false);
              }}
              inline
              selectsEnd
              dateFormat='mm'
              selected={date}
              minDate={minDate}
              maxDate={maxDate}
              locale={locale ?? ko}
              showMonthYearPicker
              renderCustomHeader={(props) => <YearStepper {...props} minDate={minDate} maxDate={maxDate} />}
              showFourColumnMonthYearPicker
            />
          </div>
        </DatePickerWrapper>
      )}
      <IconButton styleVar='GHOST' sizeVar='S' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <Icon iconSource={RightArrowIcon} sizeVar='XS' color={nextMonthButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
    </Header>
  );
};

export default MonthStepper;
