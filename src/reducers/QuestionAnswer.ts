/// <reference path="../index.d.ts" />
import { assign, omit, each } from "lodash";
import { QuestionAnswer } from "../actions";
import { ModelAvailability } from "../constants";
import Utility from "../Utilities";
const { gradeResults } = Utility;

const {
  COLLECTION_RESPONSE,
  COLLECTION_REQUEST,
  APPLY_ANSWER_REQUEST,
  APPLY_ANSWER_RESPONSE,
  APPLY_QUESTION_REQUEST,
  APPLY_QUESTION_RESPONSE,
  CLEAR_RESULTS,
  REMOVE_RESULT,
  GRADE_REQUEST
} = QuestionAnswer;
const initialState: Infrastructure.IQuestionAnswerState = {
  collection: {},
  results: {},
  answerOrder: {},
  currentAnswer: 0,
  isComplete: false,
  isLoaded: false
};

const applyAnswerToQuestion = (
  state: Infrastructure.IQuestionAnswerState,
  stateAddition: object,
  answerId: number = -1,
  questionId: number = -1
) => {
  console.log("apply answer to quesiton", answerId, questionId);
  const currentAnswer = answerId === -1 ? state.currentAnswer : answerId;
  const currentQuestion: number =
    questionId === -1 ? state.currentQuestion : questionId;
  if (currentAnswer > -1 && currentQuestion > -1) {
    console.log("does this ever happen", currentAnswer, currentQuestion);
    stateAddition.results = {
      ...state.results,
      [currentQuestion]: currentAnswer
    };
    stateAddition.currentQuestion = -1;
    stateAddition.currentAnswer = -1;
    stateAddition.collection[currentQuestion].questionAvailability =
      ModelAvailability.used;
    stateAddition.collection[currentAnswer].answerAvailability =
      ModelAvailability.used;
  }
};

export default (
  state: Infrastructure.IQuestionAnswerState = initialState,
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
      console.log(action.payload);
      stateAddition.currentAnswer = action.payload;
      stateAddition.collection = assign({}, state.collection);
      each(stateAddition.collection, qa => {
        console.log(qa);
        if (qa.answerAvailability === "selected") {
          qa.answerAvailability = "available";
        }
      });
      stateAddition.collection[action.payload].answerAvailability = "selected";
      applyAnswerToQuestion(state, stateAddition, action.payload, -1);
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
      applyAnswerToQuestion(state, stateAddition, -1, action.payload);
      break;
    case APPLY_QUESTION_RESPONSE:
      break;
    case CLEAR_RESULTS:
      stateAddition.results = {};
      stateAddition.collection = assign({}, state.collection);
      each(stateAddition.collection, qa => {
        qa.answerAvailability = ModelAvailability.available;
        qa.questionAvailability = ModelAvailability.available;
      });
      break;
    case REMOVE_RESULT:
      let foundAnswer = state.results[action.payload];
      stateAddition.collection = assign({}, state.collection);
      each(stateAddition.collection, qa => {
        if (qa.id === foundAnswer) {
          qa.answerAvailability = ModelAvailability.available;
        }
        if (qa.id === action.payload) {
          qa.questionAvailability = ModelAvailability.available;
        }
      });
      stateAddition.results = omit(state.results, action.payload);
      break;
    case GRADE_REQUEST:
      let correctCount: number = 0;
      each(state.results, (qid, aid) => {
        if (qid === aid) ++correctCount;
      });
      console.log(state);
      stateAddition.results = assign({}, state.results);
      stateAddition.collection = assign({}, state.collection);
      gradeResults(stateAddition.collection, stateAddition.results);
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
