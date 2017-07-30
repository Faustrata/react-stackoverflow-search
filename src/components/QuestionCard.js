import React from 'react';
import './QuestionCard.css'
import OwnerCard from './OwnerCard';

const QuestionCard = (props) => {
  var tags = [];
  props.tags.map((tag,i) =>
    tags.push(<label key={i} className="tag">{tag}</label>));

  return (
    <div className="question-card" >
      <label onClick={() => props.handleCardClick(props.answer_count)} className="card-title">{props.title}</label>
      <div className="card-content">
        <div className="score">
          <label>Score</label>
          <label>{props.score}</label>
        </div>
        <div className="answers-count">
          <label>Answers</label>
          <label>{props.answer_count}</label>
        </div>
        <OwnerCard {...props.owner}/>
      </div>
      <span className="tags">{tags}</span>
    </div>
  );
}

export default QuestionCard;