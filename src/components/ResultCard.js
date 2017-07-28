import React from 'react';
import './ResultCard.css'
const ResultCard = (props) => {
  var tags = [];
  props.tags.map((tag) =>
    tags.push(tag))
  tags = tags.join(',');
  return (
    <div className="question-card">
      <label className="card-title">{props.title}</label>
      <hr />
      <div className="card-content">
        <div className="owner">
          <label className="owner-name">{props.owner.display_name}</label>
          <img alt="display_image" width="50" height="50" src={props.owner.profile_image} />
        </div>
        <label className="tags">{tags}</label>
      </div>
    </div>
  );
}

export default ResultCard;