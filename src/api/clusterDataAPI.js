import ApiClient from "./apiClient";
import { API_SERVER_BASE_URL, API_KEY } from "../config/appConfig";

const config = {
  api_key: API_KEY,
  headerKeys: {
    api_key: "x-api-key"
  }
};

export default class ClusterDataAPI {
  static getMasterData() {
    const url = `${API_SERVER_BASE_URL}database`;

    return ApiClient.Get(url, config);
  }
}
