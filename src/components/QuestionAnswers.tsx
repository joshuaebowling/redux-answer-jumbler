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
    this.renderQuestions(props.collection);
    this.renderAnswers(props.answerOrder, props.collection);
    props.getQASet(props.match.params.name);
  }
  componentWillUpdate(state) {
    this.renderResults(state.results);
    this.renderQuestions(state.collection);
    this.renderAnswers(state.answerOrder, state.collection);
  }
  clearAllResults() {
    this.props.clearAllResults();
  }
  renderQuestions(collection: Array<Models.VMQuestionAnswer>) {
    this.questions = chain(collection)
      .map(qa => {
        return (
          <Question
            key={qa.id}
            viewModel={qa}
            onSelect={this.props.onQuestionSelect}
            stateClass={qa.questionAvailability}
          />
        );
      })
      .value();
  }
  renderAnswers(
    answerOrder: object,
    collection: Array<Models.VMQuestionAnswer>
  ) {
    this.answers = map(answerOrder, (a: number) => {
      return (
        <Answer
          key={a}
          viewModel={collection[a]}
          onSelect={this.props.onAnswerSelect}
          stateClass={collection[a].answerAvailability}
        />
      );
    });
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
        <button onClick={this.props.grade}>Score</button>
      </div>
    );
  }
}

export default QuestionAnswers;
