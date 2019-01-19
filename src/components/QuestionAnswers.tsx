/// <reference path="../index.d.ts" />
import React from "react";
import { map, each, values, chain, value } from "lodash";
import QuestionAnswer from "./QuestionAnswer";
import Answer from "./Answer";

class QuestionAnswers extends React.Component {
  constructor(props: Infrastructure.IQuestionAnswerProps) {
    super(props);
    this.questions = chain(props.collection)
      .map(qa => (
        <QuestionAnswer
          key={qa.id}
          onClick={props.onQuestionClick}
          viewModel={qa}
        />
      ))
      .value();
    each(props.answerOrder, ao => console.log(props.collection[ao]));
    this.answers = map(props.answerOrder, (a: number) => (
      <Answer key={a} viewModel={props.collection[a]} />
    ));
  }
  componentWillUnmount() {}
  questions = [];
  answers = [];
  render() {
    return (
      <div className="qa-container row">
        <div className="col-md-3">{this.questions}</div>
        <div className="col-md-3">{this.answers}</div>
      </div>
    );
  }
}

export default QuestionAnswers;
