import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import autobind from 'autobind-decorator';
import { fetchPaths, clearPaths } from 'Stores/Actions/pathActions';
import FileBrowserModalContent from './FileBrowserModalContent';

function createMapStateToProps() {
  return createSelector(
    (state) => state.paths,
    (paths) => {
      const {
        parent,
        currentPath,
        directories,
        files
      } = paths;

      const filteredPaths = _.filter([...directories, ...files], ({ path }) => {
        return path.toLowerCase().startsWith(currentPath.toLowerCase());
      });

      return {
        parent,
        currentPath,
        directories,
        files,
        paths: filteredPaths
      };
    }
  );
}

const mapDispatchToProps = {
  fetchPaths,
  clearPaths
};

class FileBrowserModalContentConnector extends Component {

  // Lifecycle

  componentWillMount() {
    this.props.fetchPaths({ path: this.props.value });
  }

  //
  // Listeners

  @autobind
  onFetchPaths(path) {
    this.props.fetchPaths({ path });
  }

  @autobind
  onClearPaths() {
    // this.props.clearPaths();
  }

  @autobind
  onModalClose() {
    this.props.clearPaths();
    this.props.onModalClose();
  }

  //
  // Render

  render() {
    return (
      <FileBrowserModalContent
        onFetchPaths={this.onFetchPaths}
        onClearPaths={this.onClearPaths}
        {...this.props}
        onModalClose={this.onModalClose}
      />
    );
  }
}

FileBrowserModalContentConnector.propTypes = {
  value: PropTypes.string,
  fetchPaths: PropTypes.func.isRequired,
  clearPaths: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default connect(createMapStateToProps, mapDispatchToProps)(FileBrowserModalContentConnector);
