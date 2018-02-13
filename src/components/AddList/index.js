import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './AddList.css';

class AddList extends Component {
  constructor(props){
    super(props)
    this.state = {
      isEditOn: false,
      listName: ''
    }
    this.changeEditMode = this.changeEditMode.bind(this);
    this.changeListName = this.changeListName.bind(this);
  }

  changeEditMode(value) {
    this.setState({ isEditOn: value });
  }

  changeListName(value) {
    this.setState({ listName: value });
  }

  onAddList() {
    this.props.onAddList(this.state.listName);
    this.changeEditMode(false);
  }

  render() {
    return(
      <div className="add-list">
        { this.state.isEditOn ?
          <div className="add-list__edit">
            <div className="add-list__text">
              <Input placeholder="List Name" onChange={evt => this.changeListName(evt.target.value)} />
            </div>
            <div className="add-list__actions">
              <Button type="primary" onClick={() => this.onAddList()}>Add</Button>
              <Button className="add-list__actions--cancel" onClick={() => this.changeEditMode(false)}>Cancel</Button>
            </div>
          </div> :
          <Button className="add-list-button" type="primary" onClick={() => this.changeEditMode(true)}>Add List</Button> 
        }
      </div>
    )
  }
}

export default AddList;
