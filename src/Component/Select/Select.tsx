import React from "react";
import TimezoneType from "../../http/models/api/timezones";

interface PropsType {
  data: Array<TimezoneType>,
  idTimezon: number,
  setIdTimezon: (value: number) => void,
}

const Select: React.FC<PropsType> = ({ data, idTimezon, setIdTimezon }) => {

  const mass = data?.map((e, index) => {
    return <option key={index} value={index.toString()}>{e.name}</option>
  })

  const change = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIdTimezon(+e.target.value);
  }

  return <select name="select" value={idTimezon.toString()} onChange={change}>
    {mass}
  </select>
}

export default Select;