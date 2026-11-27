import { DatePickerWrapper, Month, Header } from './Stepper.styled';
import type { DayDatepickerHeaderCustomProps } from '../DayDatepicker/DayDatepicker.types';
import DatePicker from 'react-datepicker';
import { Icon } from '../../Icon';
import { LeftArrowIcon, RightArrowIcon, LeftArrowXsmallIcon, RightArrowXsmallIcon } from '@shoplflow/shopl-assets';
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
  className,
}: MonthStepperProps) => {
  const [isOpen, setIsOpen] = useOutsideClick({
    selector: '.react-datepicker__header',
  });
  // S: IconButton XS(24) + xsmall 화살표 12 — YearStepper 와 같은 구성 (M 은 기존 그대로)
  const isSmall = sizeVar === 'S';

  return (
    <Header className={`calendarHeader ${className}`} data-component='month-stepper'>
      <IconButton
        styleVar='GHOST'
        sizeVar={isSmall ? 'XS' : 'S'}
        iconSizeVar={isSmall ? 'XS' : undefined}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
        aria-disabled={prevMonthButtonDisabled}
      >
        <Icon
          iconSource={isSmall ? LeftArrowXsmallIcon : LeftArrowIcon}
          sizeVar={isSmall ? undefined : 'XS'}
          color={prevMonthButtonDisabled ? 'neutral200' : 'neutral700'}
        />
      </IconButton>
      <Month
        className={`react-datepicker__header ${className}`}
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        {/* S 는 월 두 자리(2027.01 · 디자인 가이드), M 은 기존 그대로(2027.1) */}
        <Text typography={sizeVar === 'M' ? 'title1_700' : 'body1_700'}>{`${date.getFullYear()}.${
          isSmall ? String(monthDate.getMonth() + 1).padStart(2, '0') : monthDate.getMonth() + 1
        }`}</Text>
      </Month>
      {isOpen && (
        <DatePickerWrapper>
          <div className={`datepicker-header-wrapper ${className}`}>
            <DatePicker
              className={`datepicker-custom-month ${className}`}
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
              renderCustomHeader={(props) => (
                <YearStepper {...props} minDate={minDate} maxDate={maxDate} className={className} />
              )}
              showFourColumnMonthYearPicker
            />
          </div>
        </DatePickerWrapper>
      )}
      <IconButton
        styleVar='GHOST'
        sizeVar={isSmall ? 'XS' : 'S'}
        iconSizeVar={isSmall ? 'XS' : undefined}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled}
        aria-disabled={nextMonthButtonDisabled}
      >
        <Icon
          iconSource={isSmall ? RightArrowXsmallIcon : RightArrowIcon}
          sizeVar={isSmall ? undefined : 'XS'}
          color={nextMonthButtonDisabled ? 'neutral200' : 'neutral700'}
        />
      </IconButton>
    </Header>
  );
};

export default MonthStepper;
