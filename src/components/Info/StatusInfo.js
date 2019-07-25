import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import { STATUS_COLOR_CODES } from "../../config/appConfig";

const styles = () => ({
  status: {
    color: props => STATUS_COLOR_CODES[props.status],
    textTransform: "capitalize"
  }
});

function StatusInfo(props) {
  const { classes, clusterName, status } = props;
  console.log("StatusInfo ", props);

  return (
    <div>
      <div>{clusterName}</div>
      <div align="center">Status</div>
      <div align="center" className={classes.status}>
        {status}
      </div>
    </div>
  );
}

StatusInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  clusterName: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default React.memo(injectSheet(styles)(StatusInfo));
