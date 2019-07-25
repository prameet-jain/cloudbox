import React from "react";
import { connect } from "react-redux";

import {
  getMasterData,
  changeCluster,
  setClusterStatus,
  addWorkerCluster
} from "../actions/index";

const mapStateToProps = state => {
  return {
    isDataLoaded: state.ClusterDataReducer.isDataLoaded,
    apiError: state.ClusterDataReducer.error,
    clusterData: state.ClusterDataReducer.data,
    currentSelectedCluster: state.ClusterControlReducer.currentSelectedCluster
  };
};

class FetchApp extends React.Component {
  componentDidMount() {
    this.props.getMasterData();
  }
  render() {
    const { addWorkerCluster } = this.props;
    if (!this.props.isDataLoaded) {
      if (this.props.apiError) return this.props.error();

      return this.props.loader();
    }

    if (this.props.isDataLoaded)
      return this.props.render({
        clusterData: this.props.clusterData,
        currentSelectedCluster: this.props.currentSelectedCluster,
        changeCluster: this.props.changeCluster,
        setClusterStatus: this.props.setClusterStatus,
        addWorkerCluster: addWorkerCluster
      });
  }
}

export default connect(
  mapStateToProps,
  { getMasterData, changeCluster, setClusterStatus, addWorkerCluster }
)(FetchApp);
