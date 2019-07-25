import React from "react";
import PropTypes from "prop-types";
import Box from "../Box/Box";
import Label from "../Info/Label";

function StorageBox(props) {
  const { size } = props;
  console.log("StorageBox ", props);
  return (
    <Box>
      <Label label="Total Storage:" value={`${size} TB`} />
    </Box>
  );
}

StorageBox.propTypes = {
  size: PropTypes.number.isRequired
};

export default React.memo(StorageBox);
