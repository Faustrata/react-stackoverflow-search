import React from 'react';
import './AnswerCard.css';
import OwnerCard from './OwnerCard'
import ReactHtmlParser from 'react-html-parser';

const AnswerCard = (props) => {
    var answers = [];
    props.answers.map((answer,i) => {
        const answer_body = answer.body;
        let cname = "answer ";
        if(answer.is_accepted) cname += "answer-accepted";
        answers.push(
        <div className={cname} key={i} >
            <div>{ReactHtmlParser(answer_body)}</div>
            <OwnerCard {...answer.owner}/>
        </div>);
        return 1;
    })
    return(
        <div className="answers">
            {answers}
        </div>
    )
}
export default AnswerCard;