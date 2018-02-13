import React, { Component } from 'react';
import { Modal, Input } from 'antd';
import { connect } from 'react-redux';
import { hideAddProjectModal, updateProjectName } from './actions';
import { addProject } from './../Board/actions';
import { addProjectFromDashboard } from './../DashboardMenu/actions';
import './AddProjectModal.css';

class AddProjectModal extends Component {
  constructor(props) {
    super(props)
    this.onOkClick = this.onOkClick.bind(this);
  }

  onOkClick() {
    this.props.addProject(this.props.projectName)
    this.props.addProjectFromDashboard(this.props.projectName)
    this.props.onCancel()
  }

  render() {
    return(
      <Modal
        visible={this.props.addProjectModalVisible}
        onOk={this.onOkClick}
        onCancel={this.props.onCancel}
        wrapClassName="vertical-center-modal"
      >
        <div>
          <Input placeholder="Project Name" onChange={event => this.props.updateProjectName(event.target.value)} />
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = state => {
  return {
    addProjectModalVisible: state.dashboard.addProject.isModalVisible,
    projectName: state.dashboard.addProject.project.projectName
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCancel: () => {
      dispatch(hideAddProjectModal())
    },
    updateProjectName: payload => {
      dispatch(updateProjectName(payload))
    },
    addProject: payload => {
      dispatch(addProject(payload))
    },
    addProjectFromDashboard: payload => {
      dispatch(addProjectFromDashboard(payload))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProjectModal);
