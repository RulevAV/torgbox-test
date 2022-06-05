import React, { useEffect, useRef, useState } from "react";
import "./Clock.scss";
import Select from "../Select/Select";
import MechWatches from "./MechWatches";
import TimezoneType from "../../http/models/api/timezones";

interface PropsType {
  data: Array<TimezoneType>
}

const setTimezon = (date: Date, timezone: number) => {
  const tzDifference = timezone * 60 + date.getTimezoneOffset();
  return new Date(date.getTime() + tzDifference * 60 * 1000);
}

const Clock: React.FC<PropsType> = ({ data }) => {
  const [date, setDate] = useState<Date>(new Date());
  const [idTimezon, setIdTimezon] = useState(0);

  const handle = useRef<NodeJS.Timer>();

  const updateTime = () => {
    if (data.length !== 0) {
      return setDate(setTimezon(new Date, +data[idTimezon].timezone));
    }

    setDate(new Date)
  }

  useEffect(() => {
    updateTime();

    if (handle.current)
      clearInterval(handle.current);

    handle.current = setInterval(
      updateTime,
      1000
    );

    return () => {
      clearInterval(handle.current);
    }
  }, [data, idTimezon])

  return <div className="Clock">
    <MechWatches date={date} />
    <div className="Center">
      <span>{date.toLocaleTimeString()}</span>
    </div>
    <div className="Center">
      <Select data={data} idTimezon={idTimezon} setIdTimezon={setIdTimezon} />
    </div>
  </div>
}

export default Clock;