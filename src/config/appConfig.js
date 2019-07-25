export const API_SERVER_HOST_NAME =
  "https://i76w2gt55b.execute-api.eu-central-1.amazonaws.com";
export const API_SERVER_BASE_PATH = "/frontend-developer-exercise/";
export const API_SERVER_BASE_URL = `${API_SERVER_HOST_NAME}${API_SERVER_BASE_PATH}`;
export const API_KEY = "ljqvoehADM7vZFAYscunK5fRX419MIrM7cObkhmz";

export const STATUS_COLOR_CODES = {
  starting: "#4997D0",
  started: "#FF6037",
  running: "#00CC99",
  stopping: "#FFCC33",
  stopped: "#E12C2C",
  failure: "#C8C8CD"
};

export const IS_IT_ALLOWED_TO = {
  // start cluster -> when cluster status is either of
  start: ["stopping", "stopped", "failure"],
  // stop cluster -> when cluster status is either of
  stop: ["starting", "started", "running", "failure"],
  // add cluster -> when cluster instanceType is either of
  addCluster: ["m5.2xlarge", "r5.4xlarge", "c5.12xlarge"]
};

// const canAddCluster = [
//   "m5.2xlarge",
//   "r5.4xlarge",
//   "c5.12xlarge",
//   "r5d.12xlarge",
//   "r5d.2xlarge",
//   "m5a.12xlarge",
//   "r5.24xlarge",
//   "r5d.large",
//   "r5a.12xlarge",
//   "r5a.xlarge",
//   "m5a.large"
// ];
