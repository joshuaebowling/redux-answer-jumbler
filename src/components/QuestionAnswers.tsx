/// <reference path="../index.d.ts" />
import React from "react";
import { map, each, values, chain, value, partial } from "lodash";
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
    this.renderAnswers = partial(this.renderAnswers, props.answerOrder);
    this.renderQuestions(props.collection);
    this.renderAnswers(props.collection);
  }
  componentWillUpdate(state) {
    this.renderResults(state.results);
    this.renderQuestions(state.collection);
    this.renderAnswers(state.collection);
  }
  clearAllResults() {
    this.props.clearAllResults();
  }
  renderQuestions(collection: Array<Models.VMQuestionAnswer>) {
    this.questions = chain(collection)
      .map(qa => (
        <Question
          key={qa.id}
          viewModel={qa}
          onSelect={this.props.onQuestionSelect}
          stateClass={qa.questionAvailability}
        />
      ))
      .value();
  }
  renderAnswers(
    answerOrder: object,
    collection: Array<Models.VMQuestionAnswer>
  ) {
    this.answers = map(answerOrder, (a: number) => (
      <Answer
        key={a}
        viewModel={collection[a]}
        onSelect={this.props.onAnswerSelect}
        stateClass={collection[a].answerAvailability}
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
