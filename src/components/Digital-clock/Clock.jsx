import { useState, useEffect } from "react";
export default function App() {
  const [time, setTime] = useState(new Date());

  const getCorrectTime = () => {
    const formattedHours = time.getHours() % 12;
    const hours = formattedHours.toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    const seconds = time.getSeconds().toString().padStart(2, "0");
    const AMPM = time.getHours() >= 12 ? "PM" : "AM";
    return `${hours} : ${minutes} : ${seconds} ${AMPM}`;
  };
  useEffect(() => {
    let timeInterval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timeInterval);
  }, []);
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <p>{getCorrectTime()}</p>
    </div>
  );
}
