import {
  SET_PAGE_NUMBER,
  GET_WEATHER_DATA_SUCCESS
} from "../constants/action-types";
import { INITIAL_PAGE_NO, CARDS_PER_PAGE } from "../config/appConfig";

const initialState = {
  currentPageNo: INITIAL_PAGE_NO,
  cardsPerPage: CARDS_PER_PAGE,
  totalPages: 0
};

export default function PaginationControlReducer(state = initialState, action) {
  const isPositive = number => number > 0;
  const isWithinPageLimits = number => number <= state.totalPages;

  if (action.type === SET_PAGE_NUMBER) {
    // if payload contains invalid number then current page number remains unchanged
    if (isPositive(action.payload) && isWithinPageLimits(action.payload)) {
      return Object.assign({}, state, {
        currentPageNo: action.payload
      });
    }
  }

  if (action.type === GET_WEATHER_DATA_SUCCESS) {
    return Object.assign({}, state, {
      totalPages: Math.ceil(action.result.list.length / CARDS_PER_PAGE)
    });
  }

  return state;
}
