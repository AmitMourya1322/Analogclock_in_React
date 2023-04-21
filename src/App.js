import React, { useState, useEffect } from "react";
import "./styles.css"; // Import CSS file for styles

const App = () => {
  const [hour, setHour] = useState(new Date().getHours() % 12);
  const [minute, setMinute] = useState(new Date().getMinutes());
  const [second, setSecond] = useState(new Date().getSeconds());

  useEffect(() => {
    // Update clock hands every second
    const timer = setInterval(() => {
      setHour(new Date().getHours() % 12);
      setMinute(new Date().getMinutes());
      setSecond(new Date().getSeconds());
    }, 1000);

    return () => {
      // Clean up timer when component is unmounted
      clearInterval(timer);
    };
  }, []);

  // Calculate rotation angles for clock hands
  const hourRotation = ((hour + minute / 60) * 360) / 12;
  const minuteRotation = ((minute + second / 60) * 360) / 60;
  const secondRotation = (second / 60) * 360;

  return (
    <div className="clockContainer">
      {/* {hour}:{minute}:{second} */}

      <div
        className="hour"
        style={{ transform: `rotate(${hourRotation}deg)` }}
      ></div>
      <div
        className="minute"
        style={{ transform: `rotate(${minuteRotation}deg)` }}
      ></div>
      <div
        className="second"
        style={{ transform: `rotate(${secondRotation}deg)` }}
      ></div>
    </div>
  );
};

export default App;
