import { useState, useEffect } from "react";
export default function Clock() {
  const [time, setTime] = useState(new Date());

  const getCorrectTime = () => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const AMPM = hours >= 12 ? "PM" : "AM";
    return `${time.getHours()} : ${time.getMinutes()} : ${time.getSeconds()} ${AMPM}`;
  };
  useEffect(() => {
    let timeout = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timeout);
  }, []);
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <p>{getCorrectTime()}</p>
    </div>
  );
}
