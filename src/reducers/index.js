import { combineReducers } from "redux";
import ClusterDataReducer from "./ClusterDataReducer";
import ClusterControlReducer from "./ClusterControlReducer";
// import PaginationControlReducer from "./PaginationControlReducer";

const appReducer = combineReducers({
  ClusterDataReducer,
  ClusterControlReducer
  // PaginationControlReducer
});

function rootReducer(state, action) {
  return appReducer(state, action);
}
export default rootReducer;
