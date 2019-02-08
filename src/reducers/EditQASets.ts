/// <reference path="../index.d.ts" />
import { assign } from "lodash";
import { QASET_NAMES_REQUEST } from "../actions/EditQASets";

const initialState: Infrastructure.IEditQASetState = {
  collections: [],
  selectedCollection: null,
  isEditing: false
};

export default (
  state: Infrastructure.IEditQASetState = initialState,
  action: Infrastructure.Action
) => {
  const stateAddition: object = {};
  switch (action.type) {
    case QASET_NAMES_REQUEST:
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
