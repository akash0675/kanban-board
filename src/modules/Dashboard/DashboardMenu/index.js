import React, { Component } from 'react';
import { Menu, Layout, Icon, Button } from 'antd';
import { connect } from 'react-redux';
import { showAddProjectModal } from './../AddProjectModal/actions';
import { changeSelectedProjectIndex } from './../Board/actions';
import logo from './../../../logo.png';
import './Menu.css';

const { Sider } = Layout;
const { SubMenu, Item } = Menu;

class DashboardMenu extends Component {
  constructor(props) {
    super(props)
    this.onClickSubMenuItem = this.onClickSubMenuItem.bind(this);
  }

  onClickSubMenuItem(event) {
    this.props.changeSelectedProjectIndex(event.key.substr(8))
  }

  render() {
    return (
      <Sider
        width="256"
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo">
          <img className="logo__image" src={logo} alt="company-logo"/>
        </div>
        <Menu theme="dark" mode="inline" onClick={event => this.onClickSubMenuItem(event)} defaultSelectedKeys={['4']}>
          <SubMenu key="projects" title={<span><Icon type="database" />projects</span>}>
            {
              this.props.projects !== undefined ?
              this.props.projects.map((project, index) => (
                <Item key={`submenu_${index}`}>{project.projectName}</Item>
              )) : undefined
            }
          </SubMenu>
        </Menu>
        <div className="add-project">
          <Button className="add-project__button" type="primary" icon="plus" onClick={this.props.showAddProjectModal}>Add Project</Button>
        </div>
      </Sider>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.dashboard.menu.projects
  };
}
const mapDispatchToProps = dispatch => {
  return {
    showAddProjectModal: () => {
      dispatch(showAddProjectModal())
    },
    changeSelectedProjectIndex: payload => {
      dispatch(changeSelectedProjectIndex(payload))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardMenu);
