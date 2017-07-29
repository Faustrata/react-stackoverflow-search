import React from 'react';
import './QuestionCard.css'
import OwnerCard from './OwnerCard';

const QuestionCard = (props) => {
  var tags = [];
  props.tags.map((tag) =>
    tags.push(tag))
  tags = tags.join(',');
  return (
    <div className="question-card" onClick={() => props.handleCardClick(props.answers)}>
      <label className="card-title">{props.title}</label>
      <hr />
      <div className="card-content">
        <OwnerCard {...props.owner}/>
        <label className="tags">{tags}</label>
      </div>
    </div>
  );
}

export default QuestionCard;