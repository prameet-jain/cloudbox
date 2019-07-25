import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";

// const styles = theme => ({
//   title: {
//     fontWeight: "bold",

//   },
//   subTitle: {
//     [theme.breakpoints.up("xs")]: {
//       fontSize: "0.8rem"
//     },
//   }
// });

function InstanceInfo(props) {
  const { instancetype, memorySize } = props;
  console.log("InstanceInfo ", props);

  return (
    <div>
      <Label label="EC2 Instance" value={instancetype} />
      <Label label="Total Ram (GB)" value={memorySize} />
    </div>
  );
}

InstanceInfo.propTypes = {
  instancetype: PropTypes.string.isRequired,
  memorySize: PropTypes.number.isRequired
};

export default React.memo(InstanceInfo);
