/// <reference path="./index.d.ts" />
import qaService from "./services/QuestionAnswer";
import { map, chain, orderBy, value, fromPairs } from "lodash";
import utilities from "./Utilities";
export const QuestionAnswer: Actions.IQuestionAnswer = {
  COLLECTION_REQUEST: "COLLECTION_REQUEST",
  COLLECTION_RESPONSE: "COLLECTION_RESPONSE",
  APPLY_ANSWER_REQUEST: "APPLY_ANSWER_REQUEST",
  APPLY_ANSWER_RESPONSE: "APPLY_ANSWER_RESPONSE",
  START_ANSWERING: "START_ANSWERING",
  STOP_ANSWERING: "STOP_ANSWERING",
  get: () => (dispatch: Function) => {
    dispatch({ type: QuestionAnswer.COLLECTION_REQUEST, payload: null });
    const collection = qaService();
    // quick and dirty algo to reoder the answers
    const answerOrder = chain(collection)
      .orderBy(qa => qa.answer)
      .map(qa => qa.id)
      .value();
    dispatch({
      type: QuestionAnswer.COLLECTION_RESPONSE,
      payload: {
        collection: chain(collection)
          .map(qa => [[qa.id], utilities.createViewModel(qa)])
          .fromPairs()
          .value(),
        answerOrder
      }
    });
  },
  applyAnswer: (answerId: number) => (dispatch: Function) => {
    dispatch({ type: QuestionAnswer.APPLY_ANSWER_REQUEST, payload: answerId });
  },
  applyQuestion: (questionId: number) => (dispatch: Function) => {
    dispatch({
      type: QuestionAnswer.APPLY_QUESTION_REQUEST,
      payload: questionId
    });
  }
};
