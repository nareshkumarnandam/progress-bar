import React, { useState, useEffect } from "react";
import './App.css'

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress === 100 ? prevProgress : prevProgress + 1
      );
    }, 300);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="App">
      <h1>Progress Bar</h1>
      <div className="container">
        <div className="progress-bar"  style={{ width: `${progress}%` }}><span style={{
          color: progress > 49 ? "white" : "black"
        }}>{progress}%</span></div>
      </div>
      <p >{progress === 100 ? "Complete!" : "Loading..."}</p>
    </div>
  );
};
export default ProgressBar;
