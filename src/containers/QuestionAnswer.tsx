/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { QuestionAnswer as actions } from "../actions";
import { values } from "lodash";
import QuestionAnswers from "../components/QuestionAnswers";
const {
  applyAnswer,
  applyQuestion,
  clearAllResults,
  removeResult,
  grade
} = actions;

const mapStateToProps = (state: Infrastructure.IState) => {
  return {
    collection: state.questionAnswer.collection,
    answerOrder: state.questionAnswer.answerOrder,
    results: state.questionAnswer.results
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onQuestionSelect: (questionId: number) => {
      dispatch(applyQuestion(questionId));
    },
    onAnswerSelect: (answerId: number) => dispatch(applyAnswer(answerId)),
    clearAllResults: () => dispatch(clearAllResults()),
    removeResult: (id: number) => dispatch(removeResult(id)),
    grade: () => dispatch(grade())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswers);
