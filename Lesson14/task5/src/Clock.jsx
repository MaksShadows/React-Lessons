import React, { useState, useEffect } from "react";

const getTime = (timezone) => {
  const currentTimeZone = new Date().getTimezoneOffset() / 60;
  const locationTimeZone = new Date(new Date().setHours(new Date().getHours() + currentTimeZone + timezone));
  return locationTimeZone;
}

const Clock = ({ location, offset }) => {
  const [time, setTime] = useState(getTime(offset).toLocaleTimeString());

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(getTime(offset).toLocaleTimeString());
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div className="clock">
      <div className="clock__location">
        {/* <!-- название города --> */}
        {location}
      </div>
      <div className="clock__time">
        {/* <!-- локальное время в этом городе (с учером переданного смещения) --> */}
        {/* 7:00:51 AM */}
        {time}
      </div>
    </div>
  );
};

export default Clock;
