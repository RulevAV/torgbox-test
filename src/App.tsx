import React, { useEffect } from "react";
import "./App.scss";
import Clock from "./Component/Clock/Clock";
import { useDispatch, useSelector } from 'react-redux'
import { timezonesThunk } from "./redux/Timezones/Timezones-Reducer";
import { AppStateType } from "./redux/redux-store";
import Alert from "./Component/Alert/Alert";

function App() {
  const dispatch = useDispatch<any>();
  const data = useSelector((state: AppStateType) => {
    return state.timezonesReducer.timezones;
  });
  useEffect(() => {
    dispatch(timezonesThunk.set());
  }, [])

  return (
    <div className="App" style={{ display: "flex", "flexWrap": "wrap", "justifyContent": "space-between" }}>
      <Clock data={data} />
      <Clock data={data} />
      {data.length === 0 ? <Alert message="Идет загрузка данных." /> : null}
    </div>
  );
}

export default App;