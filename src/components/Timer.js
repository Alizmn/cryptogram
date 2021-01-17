import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import "./visualStyle/Timer.scss";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Updating...</div>;
  }

  return (
    <div className="timer">
      <div className="text">Price Update in</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

export default function Timer(props) {
  props.onComplete && props.onComplete();
  return (
    <div className="timer">
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying={props.play}
          duration={10}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => [true, 1000]}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
  );
}
