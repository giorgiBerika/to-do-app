import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const weekDaysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const currentDay = weekDaysArray[currentTime.getDay()];
  const dayNum = currentTime.getDate();
  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();
  const amPm = currentHour < 12 ? "AM" : "PM";
  const formattedMinute = String(currentMinute).padStart(2, '0');

  return (
    <div className='app-header-wrapper'>
      <div className='app-header-date-wrapper'>
        <div className='app-date-day-num'>
          <span className='app-date-day'>{currentDay.substring(0, 4)}</span>
          <span className='app-date-num'>{dayNum}</span>
        </div>
        <div className='app-date-time-am-pm'>
          <span className='app-date-time'>{currentHour}:{formattedMinute}</span>
          <span className='app-date-am-pm'>{amPm}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;