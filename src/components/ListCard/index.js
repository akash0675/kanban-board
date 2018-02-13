import React from 'react';
import { Button } from 'antd';
import './ListCard.css';

const ListCard = ({ task, listIndex, cardIndex, deleteCard }) => {
  return (
    <div className="list-card">
      <div className="list-card__task">
        {task}
      </div>
      <div className="list-card__action">
        <Button style={{width: "100%"}} type="danger" onClick={() => deleteCard(listIndex, cardIndex)}>Delete Card</Button>
      </div>
    </div>
  )
}

export default ListCard;