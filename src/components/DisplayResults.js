import React from 'react';
import QuestionCard from './QuestionCard';
import './DisplayResults.css'

const DisplayResults = (props) => {
  let resultItems = [];
  props.items.map((item,i) => 
    resultItems.push(<QuestionCard handleCardClick={props.handleCardClick} key={i} {...item}/>)
  )
  return (
    <div className="displayresults">
     {resultItems}
    </div>
      );
}

export default DisplayResults;