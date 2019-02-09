/// <reference path="../index.d.ts" />
import { assign } from "lodash";
import { EditQASets as Actions } from "../actions/EditQASets";
import { QuestionAnswer } from "../services/QuestionAnswer";

const { QASET_NAMES_REQUEST } = Actions;
const initialState: Infrastructure.IEditQASetState = {
  qaSetNames: [],
  selectedQASet: null,
  isEditing: false
};

export default (
  state: Infrastructure.IEditQASetState = initialState,
  action: Infrastructure.Action
) => {
  const stateAddition: object = {};
  switch (action.type) {
    case QASET_NAMES_REQUEST:
      stateAddition.qaSetNames = QuestionAnswer.getNames();
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
