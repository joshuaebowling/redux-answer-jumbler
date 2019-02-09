/// <reference path="../index.d.ts" />
import { assign } from "lodash";
import { EditQASets as Actions } from "../actions/EditQASets";

const { QASET_NAMES_REQUEST, SAVE_QASET_REQUEST, EDIT_QASET_REQUEST } = Actions;
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
      stateAddition.qaSetNames = action.payload;
      break;
    case SAVE_QASET_REQUEST:
      stateAddition.qaSetNames = action.payload;
      break;
    case EDIT_QASET_REQUEST:
      stateAddition.selectedQASet = action.payload;
      break;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
