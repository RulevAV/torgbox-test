import React from "react";

interface PropsType {
  date: Date,
}

const MechWatches: React.FC<PropsType> = ({ date }) => {
  const mark = [];

  for (let i = 0; i < 60; i++) {
    mark.push(<section key={i} className="MechWatches__indicator"></section>);
  }

  return <div className="MechWatches">
    <div className="MechWatches__second" style={{ transform: `rotateZ(${date.getSeconds() * 6}deg)` }}></div>
    <div className="MechWatches__minute" style={{ transform: `rotateZ(${date.getMinutes() * 6}deg)` }}></div>
    <div className="MechWatches__hour" style={{ transform: `rotateZ(${date.getHours() * 30}deg)` }}></div>
    {mark}
    <ul className="MechWatches__dial">
      <li><i>12</i></li>
      <li><i>1</i></li>
      <li><i>2</i></li>
      <li><i>3</i></li>
      <li><i>4</i></li>
      <li><i>5</i></li>
      <li><i>6</i></li>
      <li><i>7</i></li>
      <li><i>8</i></li>
      <li><i>9</i></li>
      <li><i>10</i></li>
      <li><i>11</i></li>
    </ul>
  </div>
}

export default MechWatches;