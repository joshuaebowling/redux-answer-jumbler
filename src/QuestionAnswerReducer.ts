/// <reference path="./index.d.ts" />
import { assign } from "lodash";
import { QuestionAnswer } from "./actions";
const {
  COLLECTION_RESPONSE,
  COLLECTION_REQUEST,
  APPLY_ANSWER_REQUEST,
  APPLY_ANSWER_RESPONSE,
  APPLY_QUESTION_REQUEST,
  APPLY_QUESTION_RESPONSE
} = QuestionAnswer;
const initialState: Infrastructure.IState = {
  collection: {},
  results: {},
  answerOrder: {},
  currentAnswer: 0,
  isComplete: false,
  isLoaded: false
};

const applyAnswerToQuestion = (
  state: Infrastructure.IState,
  stateAddition: object,
  answerId: number = 0,
  questionId: number = 0
) => {
  const currentAnswer = answerId === 0 ? state.currentAnswer : answerId;
  const currentQuestion: number =
    questionId === 0 ? state.currentQuestion : questionId;
  console.log("ca=", currentAnswer);
  console.log("cq=", currentQuestion, questionId);
  if (currentAnswer !== 0 && currentQuestion !== 0) {
    stateAddition.results = {
      ...state.results,
      [currentQuestion]: currentAnswer
    };
  }
};
export default (
  state: Infrastructure.IState = initialState,
  action: Infrastructure.Action
) => {
  const stateAddition: object = {};
  console.log("questionpayload", APPLY_QUESTION_REQUEST);

  switch (action.type) {
    case COLLECTION_REQUEST:
      break;
    case COLLECTION_RESPONSE:
      stateAddition.isLoaded = true;
      stateAddition.collection = action.payload.collection;
      stateAddition.answerOrder = action.payload.answerOrder;
      break;
    case APPLY_ANSWER_REQUEST:
      stateAddition.currentAnswer = action.payload;
      applyAnswerToQuestion(state, stateAddition, action.payload, 0);
      break;
    case APPLY_ANSWER_RESPONSE:
      break;
    case APPLY_QUESTION_REQUEST:
      stateAddition.currentQuestion = action.payload;
      applyAnswerToQuestion(state, stateAddition, 0, action.payload);
      break;
    case APPLY_QUESTION_RESPONSE:
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
