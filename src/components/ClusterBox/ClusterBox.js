import React from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import StatusInfo from "../Info/StatusInfo";
import NodeInfo from "../Info/NodeInfo";
import InstanceInfo from "../Info/InstanceInfo";
import ClusterBoxActions from "../ClusterBoxActions/ClusterBoxActions";

function ClusterBox(props) {
  const { data, workernodes, setClusterStatus, addWorkerCluster } = props;
  console.log("ClusterBox ", props);
  const clusterName = data.isMaster
    ? "Master Cluster"
    : `Worker Cluster ${data.key}`;

  return (
    <Box>
      <StatusInfo clusterName={clusterName} status={data.status} />
      <NodeInfo clusterNodes={data.numbernodes} workerNodes={workernodes} />
      <InstanceInfo instancetype={data.instancetype} memorySize={data.ram} />
      <ClusterBoxActions
        data={data}
        setClusterStatus={setClusterStatus}
        addWorkerCluster={addWorkerCluster}
      />
    </Box>
  );
}

ClusterBox.propTypes = {
  data: PropTypes.object.isRequired,
  workernodes: PropTypes.number.isRequired,
  setClusterStatus: PropTypes.func.isRequired,
  addWorkerCluster: PropTypes.func.isRequired
};

export default React.memo(ClusterBox);
