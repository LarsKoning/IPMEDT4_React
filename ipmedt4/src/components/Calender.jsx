import React, { useState } from 'react';
import moment from 'moment';
import '../styles/calender.css'


const Calendar = (props) => {
  const [date, setDate] = useState(moment());

  const handlePrevMonth = () => {
    setDate(date.clone().subtract(1, 'month'));
  };

  const handleNextMonth = () => {
    setDate(date.clone().add(1, 'month'));
  };

  const renderDaysOfWeek = () => {
    const weekdays = moment.weekdaysShort();
    return weekdays.map(day => <div key={day}>{day}</div>);
  };

  const renderCalendarDays = () => {
    const startOfMonth = date.clone().startOf('month');
    const endOfMonth = date.clone().endOf('month');
    const startOfCalendar = startOfMonth.clone().startOf('week');
    const endOfCalendar = endOfMonth.clone().endOf('week');
    const calendarDays = [];

    let currentDay = startOfCalendar.clone();
    while (currentDay.isSameOrBefore(endOfCalendar, 'day')) {
      calendarDays.push(currentDay);
      currentDay = currentDay.clone().add(1, 'day');
    }

    return calendarDays.map((day, index) => {
      const isCurrentMonth = day.isSame(date, 'month');
      const isToday = day.isSame(moment(), 'day');
      const isPast = day.isBefore(moment(), 'day');
      const isTaken = props.isTaken;

      return (
        <div
          key={index}
          className={`calendar-day ${isCurrentMonth ? 'current-month' : ''} ${isToday ? 'today' : ''} ${isPast ? 'past' : ''}
          ${isTaken.some(val => 
            (moment(val).isSame(day, 'day'))
          ) ? 'taken' : ''}
          `}
          
          onClick={() => handleDateClick(day)}
        >
          {day.format('D')}
        </div>
      );
    });
  };

  const handleDateClick = day => {
    console.log('Selected Date:', day.format('YYYY-MM-DD'));
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}><img id='leftArrow' src="./icons/Back-Arrow.svg" alt="Arrow" /></button>
        <h2>{date.format('MMMM YYYY')}</h2>
        <button onClick={handleNextMonth}><img id='rightArrow' src="./icons/Back-Arrow.svg" alt="Arrow" /></button>
      </div>
      <div className="calendar-body">
        {renderDaysOfWeek()}
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;