import axios from "axios";
import TimezoneType from "../models/api/timezones";

export const getTimezones = () => {
  return axios.get<Array<TimezoneType>>('http://localhost:3004/timezones');
}