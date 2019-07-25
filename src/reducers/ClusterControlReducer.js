import { CHANGE_CLUSTER_VIEW_KEY } from "../constants/action-types";

const initialState = {
  currentSelectedCluster: 0
};

export default function ClusterControlReducer(state = initialState, action) {
  // const isPositive = number => number > 0;
  // const isWithinPageLimits = number => number <= state.totalPages;

  if (action.type === CHANGE_CLUSTER_VIEW_KEY) {
    // if payload contains invalid number then current page number remains unchanged

    // if (isPositive(action.payload) && isWithinPageLimits(action.payload)) {
    return Object.assign({}, state, {
      currentSelectedCluster: action.payload
    });
    // }
  }

  // if (action.type === GET_WEATHER_DATA_SUCCESS) {
  //   return Object.assign({}, state, {
  //     totalPages: Math.ceil(action.result.list.length / CARDS_PER_PAGE)
  //   });
  // }

  return state;
}
