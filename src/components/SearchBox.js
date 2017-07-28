import React from 'react';
import {fetchQuestionsByTagUrl} from '../JsonFetch'
const SearchBox = (props) => {
  let input;
  return (
    <div className="App">
      <form onSubmit={e =>{
        e.preventDefault();
        props.handleSubmit(fetchQuestionsByTagUrl(input.value));
        }}>
        <input type="text" name="search" ref={node => input = node} />
        <input type="submit"/> 
      </form>
    </div>
      );
}

export default SearchBox;