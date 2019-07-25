import produce from "immer";
import {
  GET_CLUSTER_DATA_REQUEST,
  GET_CLUSTER_DATA_SUCCESS,
  GET_CLUSTER_DATA_FAILURE,
  SET_CLUSTER_STATUS,
  ADD_WORKER_CLUSTER
} from "../constants/action-types";

const EMPTY_OBJECT = {};

const initialState = {
  data: EMPTY_OBJECT,
  error: undefined,
  isDataLoaded: false
};

const normalizeData = data => {
  const normalizedData = {
    storage: data.storage,
    workernodes: data.workerclusters.length,
    clusters: []
  };

  data.mastercluster.isMaster = true;
  data.mastercluster.key = 0;
  normalizedData.clusters.push(data.mastercluster);

  for (const index in data.workerclusters) {
    data.workerclusters[index].isMaster = false;
    data.workerclusters[index].key = Number(index) + 1;
    normalizedData.clusters.push(data.workerclusters[index]);
  }
  return normalizedData;
};

const ClusterDataReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CLUSTER_DATA_REQUEST: {
      draft.error = null;
      draft.data = null;
      draft.isDataLoaded = false;
      return draft;
    }
    case GET_CLUSTER_DATA_SUCCESS: {
      draft.error = null;
      draft.data = normalizeData(action.result);
      draft.isDataLoaded = true;
      return draft;
    }
    case GET_CLUSTER_DATA_FAILURE: {
      draft.error = action.error;
      draft.data = null;
      draft.isDataLoaded = false;
      return draft;
    }
    case SET_CLUSTER_STATUS: {
      draft.data.clusters[action.payload.index].status = action.payload.status;
      return draft;
    }
    case ADD_WORKER_CLUSTER: {
      const cluster = {
        ...action.payload,
        isMaster: false,
        key: draft.data.clusters.length,
        status: "running"
      };
      draft.data.clusters.push({ ...cluster });
      draft.data.workernodes++;
      return draft;
    }
    default:
      return draft;
  }
}, initialState);

export default ClusterDataReducer;
