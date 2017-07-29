import React,{Component} from 'react';
import QuestionCard from './QuestionCard';
import FullCard from './FullCard';
class Card extends Component{
    constructor(props){
        super(props);
        this.state = {
            display : "question"
        };
        this.handleCardClick = this.handleCardClick.bind(this);
    }
    handleCardClick(answers) {
        console.log(answers);
        this.setState(prevState => (
            prevState.display === "question" ? {
                display : "answer",
                } : {
                display : "question",
            }))
    }
    render(){
        return(
                <div className="card">
                {    this.state.display === 'question' ?
                    <QuestionCard handleCardClick={this.handleCardClick} {...this.props.item}/> :
                    <FullCard handleCardClick={this.handleCardClick} {...this.props.item}/>}
                </div>
        )
    }
}

export default Card;