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
  stateAddition: object
) => {
  if (state.currentAnswer !== 0 && state.currentQuestion !== 0)
    stateAddition.results = {
      ...state.results,
      [state.currentQuestion]: state.currentAnswer
    };
};
export default (
  state: Infrastructure.IState = initialState,
  action: Infrastructure.Action
) => {
  const stateAddition: object = {};
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
      applyAnswerToQuestion(state, stateAddition);
      break;
    case APPLY_ANSWER_RESPONSE:
      break;
    case APPLY_QUESTION_REQUEST:
      stateAddition.currentAnswer = action.payload;
      applyAnswerToQuestion(state, stateAddition);
      break;
    case APPLY_QUESTION_RESPONSE:
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
