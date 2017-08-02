import React from 'react';
import {fetchQuestionsByTagUrl} from '../JsonFetch'
import glamorous from 'glamorous';

const SearchBoxDiv = glamorous.div({
  textAlign : 'center'
})
const InputSubmit = glamorous.input({
  backgroundColor : "blue",
  color : '#fff',
  height : '30px'
})
const InputText = glamorous.input({
  height : '25px'
})


const SearchBox = (props) => {
  let input;
  return (
    <SearchBoxDiv>
      <form onSubmit={e =>{
        e.preventDefault();
        props.handleSubmit(fetchQuestionsByTagUrl(input.value));
        }}>
        <InputText type="text" name="search" placeholder="Enter tag here" ref={node => input = node} />
        <InputSubmit type="submit" value="Search"/> 
      </form>
    </SearchBoxDiv>
      );
}

export default SearchBox;