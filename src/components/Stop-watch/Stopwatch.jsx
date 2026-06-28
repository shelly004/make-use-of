import { useState, useEffect } from "react";

export default function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const displayWatch = () => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    return `${hours.toString().padStart(2, "0")} : ${minutes
      .toString()
      .padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };
  return (
    <div className="App">
      <h1>Stop watch</h1>
      <p>{displayWatch()}</p>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Stop</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTimer(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
