import { DatePickerWrapper, Month, Header } from './DayDatepickerHeader.styled';
import type { DayDatepickerHeaderCustomProps } from './DayDatepicker.types';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { Icon } from '../..//Icon';
import { LeftArrowIcon, RightArrowIcon } from '@shoplflow/shopl-assets';
import { IconButton } from '../../Buttons';

const DayDatepickerHeader = ({
  date,
  monthDate,
  decreaseMonth,
  increaseMonth,
  changeYear,
  changeMonth,
  // minDate,
  // maxDate,
  locale,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: DayDatepickerHeaderCustomProps) => {
  const [isOpen, setIsOpen] = useState(false);

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
        {`${date.getFullYear()}.${monthDate.getMonth() + 1}`}
      </Month>
      {isOpen && (
        <DatePickerWrapper className='datepickerWrapper'>
          <DatePicker
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
            // minDate={minDate}
            // maxDate={maxDate}
            locale={locale ?? 'en'}
            showMonthYearPicker
            showFourColumnMonthYearPicker
          />
        </DatePickerWrapper>
      )}
      <IconButton styleVar='GHOST' sizeVar='S' onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        <Icon iconSource={RightArrowIcon} sizeVar='XS' color={nextMonthButtonDisabled ? 'neutral200' : 'neutral700'} />
      </IconButton>
    </Header>
  );
};

export default DayDatepickerHeader;
