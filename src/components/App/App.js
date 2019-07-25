import React from "react";
import Hive from "../Hive/Hive";
import ClusterBox from "../ClusterBox/ClusterBox";
import StorageBox from "../StorageBox/StorageBox";

const App = props => {
  const {
    clusterData,
    currentSelectedCluster,
    changeCluster,
    setClusterStatus,
    addWorkerCluster
  } = props;
  console.log("App  ", clusterData);
  return (
    <React.Fragment>
      <div flex="40" layout="column" align="center">
        <Hive data={clusterData} changeCluster={changeCluster} />
      </div>
      <div
        flex="30"
        layout="column"
        layout-align="space-around stretch"
        height="50"
      >
        <StorageBox size={clusterData.storage} />
        <ClusterBox
          data={clusterData.clusters[currentSelectedCluster]}
          workernodes={clusterData.workernodes}
          setClusterStatus={setClusterStatus}
          addWorkerCluster={addWorkerCluster}
        />
      </div>
    </React.Fragment>
  );
};

export default App;
