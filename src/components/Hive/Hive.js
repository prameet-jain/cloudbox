import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import Hexagon from "../Hexagon/Hexagon";
import { STATUS_COLOR_CODES } from "../../config/appConfig";

const styles = () => ({
  root: {
    display: "flex",
    flexDirection: "row",
    "&:nth-child(even)": {
      left: "50px",
      position: "relative"
    }
  }
});

function Hive(props) {
  const { classes, data, changeCluster } = props;
  console.log("Hive  ", data);

  const hiveConfig = [];
  const hexaPerRow = 3;
  const getHiveConfig = totalCount => {
    if (totalCount <= hexaPerRow) {
      hiveConfig.push(totalCount);
      return;
    }
    if (totalCount > hexaPerRow) {
      hiveConfig.push(hexaPerRow);
      return getHiveConfig(totalCount - hexaPerRow);
    }
  };

  getHiveConfig(data.clusters.length);

  const normalizedData = [...data.clusters];

  let hives = [];
  for (const i of hiveConfig) {
    let hexas = [];
    for (let j = 0; j < i; j++) {
      let item = normalizedData.shift();
      hexas.push(
        <Hexagon
          key={item.key}
          index={item.key}
          color={STATUS_COLOR_CODES[item.status]}
          mastercluster={item.isMaster}
          changeCluster={changeCluster}
        />
      );
    }
    hives.push(
      <div className={classes.root} key={hives.length}>
        {hexas}
      </div>
    );
  }

  return <React.Fragment>{hives}</React.Fragment>;
}

Hive.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  changeCluster: PropTypes.func.isRequired
};

export default React.memo(injectSheet(styles)(Hive));
