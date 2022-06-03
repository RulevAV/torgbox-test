import React, { useEffect, useState } from "react";
import { initial } from "./initial-values";
import TimeType from "./types";

const Clock: React.FC = ({ }) => {
    const [data, setdata] = useState<TimeType>(initial);

    useEffect(() => {
        const handle = setInterval(
            () => {
                const date = new Date();
                let hh = date.getHours();
                let mm = date.getMinutes();
                let ss = date.getSeconds();

                setdata({
                    hh: hh * 30,
                    mm: mm * 6,
                    ss: ss * 6
                })
            },
            1000
        );

        return ()=>{
            clearInterval(handle);
        }
    }, [])

    const mark = [];
    for (let i = 0; i < 60; i++) {
        mark.push(<section key={i} className="clock__indicator"></section>);
    }

    return <div className="clock">
        <div className="clock__second" style={{ transform: `rotateZ(${data.ss}deg)` }}></div>
        <div className="clock__minute" style={{ transform: `rotateZ(${data.mm}deg)` }}></div>
        <div className="clock__hour" style={{ transform: `rotateZ(${data.hh}deg)` }}></div>
        {mark}
        <ul className="clock__dial">
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

export default Clock;