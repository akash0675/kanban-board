import React, { Component } from 'react';
import { Layout } from 'antd';
import { connect } from 'react-redux';
import { getProjects } from './../../services/projects';
import { showLoader } from './../Loader/actions';
import { push } from 'react-router-redux';
import DashboardMenu from './DashboardMenu';
import DashboardHeader from './DashboardHeader';
import Board from './Board';
import AddProjectModal from './AddProjectModal';
import './Dashboard.css';

const { Content } = Layout;

class Dashboard extends Component {
  componentDidMount() {
    if(this.props.login === undefined || this.props.login === {})
      this.props.redirectToLogin()
    this.props.showLoader()
    this.props.getProjects();
  }

  render(){
    return(
      <Layout className="dashboard-layout">
        <AddProjectModal />
        <DashboardMenu />
        <Layout>
          <DashboardHeader />
          <Content style={{ margin: '24px 16px', height: '100%' }}>
            <div className="board-canvas" style={{ padding: 24, background: '#fff', height: '100%' }}>
              <Board />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login
  }
}
const mapDispatchToProps = dispatch => {
  return {
    getProjects: () => {
      dispatch(getProjects())
    },
    showLoader: () => {
      dispatch(showLoader())
    },
    redirectToLogin: () => {
      dispatch(push('/'))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
