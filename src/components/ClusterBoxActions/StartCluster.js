import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import StartIcon from "./start.svg";
import { IS_IT_ALLOWED_TO } from "../../config/appConfig";

const styles = () => ({
  icon: {
    width: "100%"
  }
});

function StartCluster(props) {
  const { classes, data, setClusterStatus } = props;
  console.log("StartCluster", props);

  const startCluster = () => {
    const statusTransition = ["starting", "started", "running"];
    let count = 0;
    for (let value of statusTransition) {
      count++;
      setTimeout(function() {
        setClusterStatus({ index: data.key, status: value });
      }, 2000 * count);
    }
  };

  return IS_IT_ALLOWED_TO.start.includes(data.status) ? (
    <div layout="row" layout-align="start center">
      <div flex="20" flex-offset="10">
        <img
          alt="Start Cluster"
          className={classes.icon}
          src={StartIcon}
          onClick={startCluster}
        />
      </div>
      <div flex-offset="10">Start</div>
    </div>
  ) : null;
}

StartCluster.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setClusterStatus: PropTypes.func.isRequired
};

export default React.memo(injectSheet(styles)(StartCluster));
