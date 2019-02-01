/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { QuestionAnswer as actions } from "../actions";
import { values } from "lodash";
import QuestionAnswers from "../components/QuestionAnswers";
const { applyAnswer, applyQuestion, clearAllResults } = actions;

const mapStateToProps = (state: Infrastructure.IState) => ({
  collection: state.collection,
  answerOrder: state.answerOrder,
  results: state.results
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onQuestionSelect: (questionId: number) => {
      dispatch(applyQuestion(questionId));
    },
    onAnswerSelect: (answerId: number) => dispatch(applyAnswer(answerId)),
    clearAllResults: () => dispatch(clearAllResults())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswers);
