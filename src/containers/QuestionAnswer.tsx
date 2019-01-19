/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { applyAnswer, applyQuestion } from "../actions";
import { values } from "lodash";
import QuestionAnswers from "../components/QuestionAnswers.tsx";

const mapStateToProps = (state: Infrastructure.IState) => ({
  collection: state.collection,
  answerOrder: state.answerOrder
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    onQuestionClick: (questionId: number) =>
      dispatch(applyQuestion(questionId)),
    onAnswerClick: (answerId: number) => dispatch(applyAnswer(answerId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionAnswers);
