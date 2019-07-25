import React from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";

const styles = () => ({
  root: {
    padding: "10px 15px",
    backgroundColor: "#fff",
    // border: "1px solid",
    borderRadius: "2px",
    boxShadow: "0 6px 16px 0 rgba(0,0,0,.2)"
    // "0px 0px 4px 2px rgba(0,0,0,0.45)"
  }
});

function Box(props) {
  const { classes, children } = props;
  console.log("Box ", props);

  return (
    <div
      layout="row"
      layout-align="space-between stretch"
      className={classes.root}
    >
      {children}
    </div>
  );
}

Box.propTypes = {
  classes: PropTypes.object.isRequired
};

export default React.memo(injectSheet(styles)(Box));
