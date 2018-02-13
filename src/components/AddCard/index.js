import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './AddCard.css';
const { TextArea } = Input;

class AddCard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditOn: false,
      cardText: ''
    }
    this.changeEditMode = this.changeEditMode.bind(this);
    this.changeCardText = this.changeCardText.bind(this);
    this.onAddCard = this.onAddCard.bind(this);
  }

  changeCardText(value) {
    this.setState({ cardText: value });
  }

  changeEditMode(value) {
    this.setState({ isEditOn: value });
  }

  onAddCard() {
    this.props.onAddCard(this.props.listIndex, this.state.cardText);
    this.changeEditMode(false);
  }

  render() {
    return(
      <div className="add-card">
        { this.state.isEditOn ?
          <div className="add-card__edit">
            <div className="add-card__text">
              <TextArea onChange={evt => this.changeCardText(evt.target.value)} autosize={{ minRows: 2, maxRows: 6 }} />
            </div>
            <div className="add-card__actions">
              <Button type="primary" onClick={this.onAddCard}>Add</Button>
              <Button className="add-card__actions--cancel" onClick={() => this.changeEditMode(false)}>Cancel</Button>
            </div>
          </div> : <Button className="add-card-button" type="primary" onClick={() => this.changeEditMode(true)}>Add Card</Button> 
        }
      </div>
    )
  }
}

export default AddCard;