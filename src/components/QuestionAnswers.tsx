/// <reference path="../index.d.ts" />
import React from "react";
import { map, each, values, chain, value } from "lodash";
import QuestionAnswer from "./QuestionAnswer";
import Answer from "./Answer";
import Question from "./Question";
class QuestionAnswers extends React.Component {
  constructor(props: { collection: Array<Models.VMQuestionAnswer> }) {
    super(props);
    this.questions = chain(this.props.collection)
      .map(qa => (
        <Question
          key={qa.id}
          viewModel={qa}
          onSelect={this.props.onQuestionSelect}
        />
      ))
      .value();
    each(this.props.answerOrder, ao => console.log(this.props.collection[ao]));
    this.answers = map(this.props.answerOrder, (a: number) => (
      <Answer
        key={a}
        viewModel={this.props.collection[a]}
        onSelect={this.props.onAnswerSelect}
      />
    ));
    this.results = map(this.props.results, result => (
      <div>JSON.stringify(result)</div>
    ));
  }
  componentWillUpdate(prevState, currState) {
    console.log(arguments);
  }
  questions = [];
  answers = [];
  results = [];
  render() {
    return (
      <div className="wrapper">
        <div className="box">{this.questions}</div>
        <div className="box">{this.results}</div>
        <div className="box">{this.answers}</div>
      </div>
    );
  }
}

export default QuestionAnswers;
