/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { QuestionAnswer as actions } from "../actions";
import { values } from "lodash";
import QuestionAnswers from "../components/QuestionAnswers";
const { applyAnswer, applyQuestion } = actions;

const mapStateToProps = (state: Infrastructure.IState) => ({
  collection: state.collection,
  answerOrder: state.answerOrder,
  results: state.results
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onQuestionSelect: (questionId: number) => {
      console.log("apply", applyQuestion);
      dispatch(applyQuestion(questionId));
    },
    onAnswerSelect: (answerId: number) => dispatch(applyAnswer(answerId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswers);
