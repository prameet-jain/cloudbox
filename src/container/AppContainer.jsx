import React from "react";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";
import AppLoader from "../components/AppLoader/AppLoader";
import App from "../components/App/App";
import AppError from "../components/AppError/AppError";
import FetchApp from "./FetchApp";

const AppContainer = () => (
  <div layout="row" layout-align="center center" height="100">
    <ErrorBoundary>
      <FetchApp
        loader={() => <AppLoader />}
        render={data => (
          <App
            clusterData={data.clusterData}
            currentSelectedCluster={data.currentSelectedCluster}
            changeCluster={data.changeCluster}
            setClusterStatus={data.setClusterStatus}
            addWorkerCluster={data.addWorkerCluster}
          />
        )}
        error={() => <AppError />}
      />
    </ErrorBoundary>
  </div>
);

export default AppContainer;
