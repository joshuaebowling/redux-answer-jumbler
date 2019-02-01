/// <reference path="../index.d.ts" />
import React from "react";
import { map, each, values, chain, value } from "lodash";
import QuestionAnswer from "./QuestionAnswer";
import Answer from "./Answer";
import Question from "./Question";
import Result from "./Result";
import ClearAllResults from "./ClearAllResults";
class QuestionAnswers extends React.Component {
  constructor(props: { collection: Array<Models.VMQuestionAnswer> }) {
    super(props);
    this.renderResults = this.renderResults.bind(this);
    this.clearAllResults = this.clearAllResults.bind(this);
    this.questions = chain(this.props.collection)
      .map(qa => (
        <Question
          key={qa.id}
          viewModel={qa}
          onSelect={this.props.onQuestionSelect}
        />
      ))
      .value();
    this.answers = map(this.props.answerOrder, (a: number) => (
      <Answer
        key={a}
        viewModel={this.props.collection[a]}
        onSelect={this.props.onAnswerSelect}
      />
    ));
    this.results = map(this.props.results, result => (
      <div>{JSON.stringify(result)}</div>
    ));
  }
  componentWillUpdate(prevState, currState) {
    this.renderResults(prevState.results);
  }
  clearAllResults() {
    this.props.clearAllResults();
  }
  renderResults(resultsData: Array<object>) {
    console.log(resultsData);
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
