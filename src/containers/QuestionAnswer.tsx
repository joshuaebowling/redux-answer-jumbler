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
  grade,
  get
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
    grade: () => dispatch(grade()),
    getQASet: (name: string) => dispatch(get(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswers);
