import React from 'react';
import ResultCard from './ResultCard';
import './DisplayResults.css'
const SearchBox = (props) => {
  let resultItems = [];
  props.items.map((item,i) => 
    resultItems.push(<ResultCard key={i} {...item}/>)
  )
  return (
    <div className="displayresults">
     {resultItems}
    </div>
      );
}

export default SearchBox;