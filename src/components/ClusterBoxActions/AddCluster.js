import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import AddIcon from "./plus.svg";
import { IS_IT_ALLOWED_TO } from "../../config/appConfig";

const styles = () => ({
  icon: {
    width: "100%"
  }
});

function AddCluster(props) {
  const { classes, data, addWorkerCluster } = props;
  console.log("AddCluster", props);

  const addCluster = () => {
    addWorkerCluster({
      cpu: 20,
      instancetype: data.instancetype,
      numbernodes: 8,
      ram: 184
    });
  };

  return IS_IT_ALLOWED_TO.addCluster.includes(data.instancetype) ? (
    <div layout="row" layout-align="start center">
      <div flex="20" flex-offset="10">
        <img
          alt="Add Cluster"
          className={classes.icon}
          src={AddIcon}
          onClick={addCluster}
        />
      </div>
      <div flex-offset="10">Add Cluster</div>
    </div>
  ) : null;
}

AddCluster.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  addWorkerCluster: PropTypes.func.isRequired
};

export default React.memo(injectSheet(styles)(AddCluster));
