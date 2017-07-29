import React from 'react';
import AnswerCard from './AnswerCard'
import ReactHtmlParser from 'react-html-parser';
import './FullCard.css';
import OwnerCard from './OwnerCard';
const FullCard = (props) => {
    return (
        <div className="fullcard">
            <div className="fullcard-title"><label className="card-title">{props.title}</label><button className="btn btn-close" onClick={() => {props.handleCardClick(props.answers)}}>X</button></div>
            <div className="fullcard-content">
                <div className="question-full">
                    <div className="question-body">{ReactHtmlParser(props.body)};</div>
                    <OwnerCard {...props.owner}/>
                </div>
                <AnswerCard answers={props.answers}/>
            </div>
        </div>
    )
}

export default FullCard;