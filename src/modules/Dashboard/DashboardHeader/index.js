import React, { Component } from 'react';
import { Layout, Avatar, Badge, Icon } from 'antd';
import { connect } from 'react-redux';
import './DashboardHeader.css';

const { Header } = Layout;

class DashboardHeader extends Component {
  render() {
    return (
      <Header className="header-wrapper">
        <div className="header">
          <span className="action">
            <Badge count={this.props.notifications.count}>
              <span className="head-example">
                <Icon type="notification" />
              </span>
            </Badge>
          </span>
          <span className="action">
            <Avatar icon="user" />
            <span>{this.props.user.userName}</span>
          </span>
        </div>
      </Header>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.dashboard.header.user,
    notifications: state.dashboard.header.notifications
  }
}

export default connect(mapStateToProps)(DashboardHeader);