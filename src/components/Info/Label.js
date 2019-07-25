import React from "react";
import PropTypes from "prop-types";

// const styles = theme => ({
//   title: {
//     fontWeight: "bold",

//     [theme.breakpoints.up("xs")]: {
//       fontSize: "0.9rem"
//     },
//     [theme.breakpoints.up("sm")]: {
//       fontSize: "1rem"
//     }
//   },
//   subTitle: {
//     [theme.breakpoints.up("xs")]: {
//       fontSize: "0.8rem"
//     },
//     [theme.breakpoints.up("sm")]: {
//       fontSize: "0.9rem"
//     },
//     [theme.breakpoints.up("md")]: {
//       fontSize: "1rem"
//     }
//   }
// });

function Label(props) {
  const { label, value } = props;
  console.log("Label ", props);

  return (
    <div>
      <div>{label}</div>
      <div align="center">{value}</div>
    </div>
  );
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
};

export default React.memo(Label);
