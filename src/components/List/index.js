import React from 'react';
import { Button } from 'antd';
import AddCard from './../AddCard';
import ListCard from './../ListCard';
import './List.css';

const List = ({ listName, tasks, onDeleteList, listIndex, onAddCard, onDeleteCard }) => {
  return (
    <div className="list">
      <div className="list-header">
        <span className="list-name">{listName}</span>
        <Button onClick={onDeleteList} type="primary">Delete</Button>
      </div>
      <div className="list-content">
      {
        tasks !== undefined ?
        tasks.map((task, index) => (
          <ListCard
            key={`card_${index}`}
            task={task.taskText}
            listIndex={listIndex}
            cardIndex={index}
            deleteCard={onDeleteCard}
          />
        )) : undefined
      }
      </div>
      <AddCard
        onAddCard={onAddCard}
        listIndex={listIndex}
      />
    </div>
  );
}

export default List;
