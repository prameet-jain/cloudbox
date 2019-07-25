import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import crown from "./crown.svg";

const styles = () => ({
  root: {
    margin: "2px",
    cursor: "pointer"
  },
  upperCut: {
    borderBottom: props => `25px solid ${props.color}`
  },
  central: {
    width: "100px",
    height: "50px",
    backgroundColor: props => props.color
  },
  lowerCut: {
    borderTop: props => `25px solid ${props.color}`
  },
  invertedCut: {
    width: 0,
    borderLeft: "50px solid transparent",
    borderRight: "50px solid transparent"
  },
  crownIcon: {
    width: "inherit",
    height: "inherit"
  }
});

function Hexagon(props) {
  const { classes, mastercluster, index, changeCluster } = props;
  console.log("Hexagon  ", props);

  function selectCluster() {
    console.log("I am clicked ", index);
    changeCluster(index);
  }

  return (
    <div className={classes.root} onClick={selectCluster}>
      <div className={`${classes.upperCut} ${classes.invertedCut}`} />
      <div className={classes.central}>
        {mastercluster ? (
          <img alt="Master Cluster" src={crown} className={classes.crownIcon} />
        ) : null}
      </div>
      <div className={`${classes.lowerCut} ${classes.invertedCut}`} />
    </div>
  );
}

Hexagon.defaultProps = {
  color: "#64c7cc"
};
Hexagon.propTypes = {
  color: PropTypes.string.isRequired,
  changeCluster: PropTypes.func.isRequired
};

export default React.memo(injectSheet(styles)(Hexagon));
