import { getTimezones } from "../../http/endpoints/timezones";
import TimezoneType from "../../http/models/api/timezones";
import { InfoActionsTypes, ThunkActionType } from "../redux-store";
import { initialState } from "./initial-values";
import { initialStateTypeTimezones } from "./types";

export type ActionsTypesTimezones = InfoActionsTypes<typeof timezonesActions>;
export type ThankType = ThunkActionType<ActionsTypesTimezones, Promise<void>>;

export const timezonesReducer = (state = initialState, action: ActionsTypesTimezones): initialStateTypeTimezones => {
  switch (action.type) {
    case "TIMEZONE_SET": {
      return {
        timezones: action.value
      };
    }
    default: return state;
  }
}

export const timezonesActions = {
  setTimezones: (value: Array<TimezoneType>) => ({ type: "TIMEZONE_SET", value } as const),
}

export const timezonesThunk = {
  set: (): ThankType => {
    return async (dispatch) => {
      const data = await getTimezones()
        .then(function (response) {
          return response.data;
        });
      dispatch(timezonesActions.setTimezones(data));

    }
  }
}

export default timezonesReducer;
