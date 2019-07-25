import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

// const styles = theme => ({
//   title: {
//     fontWeight: "bold",

//     [theme.breakpoints.up("xs")]: {
//       fontSize: "0.9rem"
//     },
//     [theme.breakpoints.up("sm")]: {
//       fontSize: "1rem"
//     }
//   },
//   subTitle: {
//     [theme.breakpoints.up("xs")]: {
//       fontSize: "0.8rem"
//     },
//     [theme.breakpoints.up("sm")]: {
//       fontSize: "0.9rem"
//     },
//     [theme.breakpoints.up("md")]: {
//       fontSize: "1rem"
//     }
//   }
// });

function NodeInfo(props) {
  const { clusterNodes, workerNodes } = props;
  console.log("NodeInfo ", props);

  return (
    <div>
      <Label label="Cluster nodes" value={clusterNodes} />
      <Label label="Worker Clusters" value={workerNodes} />
    </div>
  );
}

NodeInfo.propTypes = {
  clusterNodes: PropTypes.number.isRequired,
  workerNodes: PropTypes.number.isRequired
};

export default React.memo(NodeInfo);
