import { applyMiddleware, combineReducers, createStore, Action } from "redux";
import thunk, { ThunkAction } from 'redux-thunk';
import { timezonesReducer } from "./Timezones/Timezones-Reducer";
export let reducer = combineReducers({
  timezonesReducer,
});

type RootReduserType = typeof reducer;

export type AppStateType = ReturnType<RootReduserType>
export type ThunkActionType<A extends Action, R> = ThunkAction<R, AppStateType, unknown, A>;
export type InfoActionsTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never;

let store = createStore(reducer, applyMiddleware(thunk));

export default store;
