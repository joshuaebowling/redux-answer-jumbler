/// <reference path="./index.d.ts" />
import { assign } from "lodash";
import { QuestionAnswer } from "./actions";
const { COLLECTION_RESPONSE, COLLECTION_REQUEST } = QuestionAnswer;
const initialState: Infrastructure.IState = {
  collection: new Map(),
  results: new Map(),
  isAnswering: false,
  isComplete: false,
  isLoaded: false
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
      stateAddition.collection = action.payload;
      break;
      CASE;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
