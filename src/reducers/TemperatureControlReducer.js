import { CHANGE_TEMP_UNIT } from "../constants/action-types";
import { DEFAULT_TEMP_UNIT, ALLOWED_TEMP_UNITS } from "../config/appConfig";

const initialState = {
  tempUnit: DEFAULT_TEMP_UNIT
};

export default function TemperatureControlReducer(
  state = initialState,
  action
) {
  if (action.type === CHANGE_TEMP_UNIT) {
    // if payload contains unrecognised unit then unit remains unchanged
    return Object.assign({}, state, {
      tempUnit: ALLOWED_TEMP_UNITS.includes(action.payload)
        ? action.payload
        : state.tempUnit
    });
  }
  return state;
}
