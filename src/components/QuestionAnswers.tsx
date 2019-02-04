/// <reference path="../index.d.ts" />
import React from "react";
import { map, each, values, chain, value } from "lodash";
import QuestionAnswer from "./QuestionAnswer";
import Answer from "./Answer";
import Question from "./Question";
import Result from "./Result";
import ClearAllResults from "./ClearAllResults";
class QuestionAnswers extends React.Component {
  constructor(props: {
    collection: Array<Models.VMQuestionAnswer>;
    answerOrder: Array<number>;
    results: object;
  }) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
    this.clearAllResults = this.clearAllResults.bind(this);
    this.renderQuestions = this.renderQuestions.bind(this);
    this.renderAnswers = this.renderAnswers.bind(this);
    this.renderQuestions();
    this.renderAnswers();
  }
  componentWillUpdate(prevState, currState) {
    this.renderResults(prevState.results);
    this.renderQuestions();
    this.renderAnswers();
  }
  clearAllResults() {
    this.props.clearAllResults();
  }
  renderQuestions() {
    this.questions = chain(this.props.collection)
      .map(qa => (
        <Question
          key={qa.id}
          viewModel={qa}
          onSelect={this.props.onQuestionSelect}
          classState=""
        />
      ))
      .value();
  }
  renderAnswers() {
    this.answers = map(this.props.answerOrder, (a: number) => (
      <Answer
        key={a}
        viewModel={this.props.collection[a]}
        onSelect={this.props.onAnswerSelect}
      />
    ));
  }
  renderResults(resultsData: Array<object>) {
    this.results = map(resultsData, (val, key) => {
      return (
        <Result
          answerModel={this.props.collection[val].questionModel}
          questionModel={this.props.collection[key].questionModel}
          onDeSelect={this.props.removeResult}
          key={key}
        />
      );
    });
  }

  questions = [];
  answers = [];
  results = [];
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="box">{this.questions}</div>
          <div className="box">{this.results}</div>
          <div className="box">{this.answers}</div>
        </div>
        <ClearAllResults clearResults={this.props.clearAllResults} />
      </div>
    );
  }
}

export default QuestionAnswers;
