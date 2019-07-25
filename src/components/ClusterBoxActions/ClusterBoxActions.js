import React, { useState } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import SettingsIcon from "./settings.svg";
import Popup from "../Popup/Popup";
import AddCluster from "./AddCluster";
import StartCluster from "./StartCluster";
import StopCluster from "./StopCluster";

const styles = () => ({
  icon: {
    width: "2rem"
  }
});

function ClusterBoxActions(props) {
  const [isPopupOpen, showPopup] = useState(false);
  const [offsetTop, setTop] = useState(0);

  const { classes, data, setClusterStatus, addWorkerCluster } = props;
  console.log("ClusterBoxActions ", props);

  function showActions(event) {
    console.log(event.target.offsetLeft);
    console.log(event.target.offsetTop);
    setTop(event.target.offsetTop);
    showPopup(!isPopupOpen);
  }

  function renderActions() {
    if (isPopupOpen) {
      return (
        <Popup top={offsetTop}>
          <StartCluster data={data} setClusterStatus={setClusterStatus} />
          <StopCluster data={data} setClusterStatus={setClusterStatus} />
          <AddCluster data={data} addWorkerCluster={addWorkerCluster} />
        </Popup>
      );
    }
  }
  return (
    <div>
      <img
        alt="Settings"
        src={SettingsIcon}
        className={classes.icon}
        onClick={showActions}
      />
      {renderActions()}
    </div>
  );
}

ClusterBoxActions.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  setClusterStatus: PropTypes.func.isRequired,
  addWorkerCluster: PropTypes.func.isRequired
};

export default React.memo(injectSheet(styles)(ClusterBoxActions));
