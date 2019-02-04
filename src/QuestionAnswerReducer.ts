/// <reference path="./index.d.ts" />
import { assign, omit, each } from "lodash";
import { QuestionAnswer } from "./actions";
const {
  COLLECTION_RESPONSE,
  COLLECTION_REQUEST,
  APPLY_ANSWER_REQUEST,
  APPLY_ANSWER_RESPONSE,
  APPLY_QUESTION_REQUEST,
  APPLY_QUESTION_RESPONSE,
  CLEAR_RESULTS,
  REMOVE_RESULT
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
  if (currentAnswer !== 0 && currentQuestion !== 0) {
    stateAddition.results = {
      ...state.results,
      [currentQuestion]: currentAnswer
    };
    stateAddition.currentQuestion = 0;
    stateAddition.currentAnswer = 0;
  }
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
      stateAddition.collection = assign({}, state.collection);
      each(stateAddition.collection, qa => {
        if (qa.answerAvailability === "selected") {
          qa.answerAvailability = "available";
        }
      });
      stateAddition.collection[action.payload].answerAvailability = "selected";
      applyAnswerToQuestion(state, stateAddition, action.payload, 0);
      break;
    case APPLY_ANSWER_RESPONSE:
      break;
    case APPLY_QUESTION_REQUEST:
      stateAddition.currentQuestion = action.payload;
      stateAddition.collection = assign({}, state.collection);
      each(stateAddition.collection, qa => {
        if (qa.questionAvailability === "selected") {
          qa.questionAvailability = "available";
        }
      });

      stateAddition.collection[action.payload].questionAvailability =
        "selected";
      applyAnswerToQuestion(state, stateAddition, 0, action.payload);
      break;
    case APPLY_QUESTION_RESPONSE:
      break;
    case CLEAR_RESULTS:
      stateAddition.results = {};
      break;
    case REMOVE_RESULT:
      stateAddition.results = omit(state.results, action.payload);
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
