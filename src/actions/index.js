import {
  GET_CLUSTER_DATA_REQUEST,
  GET_CLUSTER_DATA_SUCCESS,
  GET_CLUSTER_DATA_FAILURE,
  CHANGE_CLUSTER_VIEW_KEY,
  SET_CLUSTER_STATUS,
  ADD_WORKER_CLUSTER
} from "../constants/action-types";
import ClusterDataAPI from "../api/clusterDataAPI";

export function changeCluster(payload) {
  return { type: CHANGE_CLUSTER_VIEW_KEY, payload };
}

export function setClusterStatus(payload) {
  return { type: SET_CLUSTER_STATUS, payload };
}

export function addWorkerCluster(payload) {
  return { type: ADD_WORKER_CLUSTER, payload };
}

export function getMasterData() {
  return {
    types: [
      GET_CLUSTER_DATA_REQUEST,
      GET_CLUSTER_DATA_SUCCESS,
      GET_CLUSTER_DATA_FAILURE
    ],
    promise: () => ClusterDataAPI.getMasterData()
  };
}
