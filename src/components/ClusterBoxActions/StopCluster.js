import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import StopIcon from "./stop.svg";
import { IS_IT_ALLOWED_TO } from "../../config/appConfig";

const styles = () => ({
  icon: {
    width: "100%"
  }
});

function StopCluster(props) {
  const { classes, data, setClusterStatus } = props;
  console.log("StopCluster", props);

  const StopCluster = () => {
    const statusTransition = ["stopping", "stopped"];
    let count = 0;
    for (let value of statusTransition) {
      count++;
      setTimeout(function() {
        setClusterStatus({ index: data.key, status: value });
      }, 2000 * count);
    }
  };

  return IS_IT_ALLOWED_TO.stop.includes(data.status) ? (
    <div layout="row" layout-align="start center">
      <div flex="20" flex-offset="10">
        <img
          alt="Stop Cluster"
          className={classes.icon}
          src={StopIcon}
          onClick={StopCluster}
        />
      </div>
      <div flex-offset="10">Stop</div>
    </div>
  ) : null;
}

StopCluster.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setClusterStatus: PropTypes.func.isRequired
};

export default React.memo(injectSheet(styles)(StopCluster));
