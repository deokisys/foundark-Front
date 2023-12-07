import { useEffect, useState } from "react";

import { sec2time } from "../../util";

export default function TimeDiv({ setTimerBox }) {
  //다음 파메 시간

  const [time, setTime] = useState(65);
  const [timerCheck, setTimerCheck] = useState(undefined);
  const [a, seta] = useState(1);

  //필요한 엑션들
  useEffect(() => {
    //이건 전부 위로 올린다.
    setTimerBox({ timeSet: timeSet, timeReSet: timeReSet, timeCheck: timeCheck });
    return () => {
      clearInterval(timerCheck);
    };
  }, []);

  useEffect(() => {
    if (time === 0) {
      setTime((prv) => 60);
    }
  }, [time]);

  let timeSet = (nextTime) => {
    clearInterval(timerCheck);
    setTime(nextTime);
    setTimerCheck(
      setInterval(() => {
        setTime((prv) => prv - 1);
      }, 1000)
    );
  };
  let timeReSet = (plusTime) => {
    if (plusTime === 0) {
      setTime(60);
    } else {
      setTime((prv) => prv + plusTime);
    }
  };

  let timeCheck = () => {
    return time;
  };

  return (
    <div className="timeWrap">
      <div className="timeText">다음 파메 시간은 : </div>
      <div className="timer">{sec2time(time)}</div>
    </div>
  );
}
