/// <reference path="./index.d.ts" />
export const QuestionAnswer: Actions.IQuestionAnswer = {
  COLLECTION_REQUEST: "COLLECTION_REQUEST",
  COLLECTION_RESPONSE: "COLLECTION_RESPONSE",
  APPLY_ANSWER_REQUEST: "APPLY_ANSWER_REQUEST",
  APPLY_ANSWER_RESPONSE: "APPLY_ANSWER_RESPONSE",
  START_ANSWERING: "START_ANSWERING",
  get: () => (dispatch: Function) => {
    dispatch({ type: QuestionAnswer.COLLECTION_REQUEST, payload: null });
    dispatch({ type: QuestionAnswer.COLLECTION_RESPONSE, payload: new Map() });
  },
  applyAnswer: (answerId: number) => (dispatch: Function) => {},
  startAnswering: (answerId: number) => (dispatch: Function) =>
    dispatch({ type: QuestionAnswer.START_ANSWERING, payload: null })
};
