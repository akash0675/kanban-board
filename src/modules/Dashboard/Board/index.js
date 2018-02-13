import React, { Component } from 'react';
import List from './../../../components/List';
import { connect } from 'react-redux';
import { addList, deleteList, addTask, deleteTask } from './actions';
import AddList from './../../../components/AddList';
import './Board.css';

class Board extends Component {
  constructor(props) {
    super(props);
    this.onAddList = this.onAddList.bind(this);
    this.onDeleteList = this.onDeleteList.bind(this);
    this.onAddCard = this.onAddCard.bind(this);
    this.onDeleteCard = this.onDeleteCard.bind(this);
  }

  onAddList(value) {
    var payload = {
      projectId: this.props.selectedProject,
      listName: value
    };
    this.props.addList(payload);
  }

  onDeleteList(value) {
    var payload = {
      projectId: this.props.selectedProject,
      listId: value
    };
    this.props.deleteList(payload);
  }

  onAddCard(list, value) {
    var payload = {
      projectId: this.props.selectedProject,
      listId: list,
      text: value
    }
    this.props.addTask(payload);
  }

  onDeleteCard(list, card) {
    var payload = {
      projectId: this.props.selectedProject,
      listId: list,
      cardId: card
    }
    this.props.deleteTask(payload);
  }

  render() {
    return (
      <div className="board">
        { this.props.projects[this.props.selectedProject] !== undefined ?
          this.props.projects[this.props.selectedProject].projectLists.map((list, index) => (
            <List
              key={index}
              listName={list.listName}
              tasks={list.taskList}
              listIndex={index}
              onDeleteList={() => this.onDeleteList(index)}
              onAddCard={this.onAddCard}
              onDeleteCard={this.onDeleteCard}
            />
          )) : undefined
        }
        <AddList
          onAddList={value => this.onAddList(value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.dashboard.board.projects,
    selectedProject: state.dashboard.board.selectedProjectIndex
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addList: payload => {
      dispatch(addList(payload))
    },
    deleteList: payload => {
      dispatch(deleteList(payload))
    },
    addTask: payload => {
      dispatch(addTask(payload))
    },
    deleteTask: payload => {
      dispatch(deleteTask(payload))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);