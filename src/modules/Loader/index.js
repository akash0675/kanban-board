import React, { Component } from 'react';
import { Spin } from 'antd';
import { connect } from 'react-redux';
import classnames from 'classnames';
import './Loader.css';

class Loader extends Component {
  render() {
    return (
      <div className={classnames('loader', { hide: !this.props.isLoaderVisible })}>
        <div className="loader-inner">
          <Spin size="large" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoaderVisible: state.loader.isLoaderVisible
  };
}

export default connect(mapStateToProps)(Loader);
