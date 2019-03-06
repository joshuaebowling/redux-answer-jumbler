/// <reference path="../index.d.ts" />
import { assign } from "lodash";
import { EditQASets as Actions } from "../actions/EditQASets";

const {
  QASET_NAMES_REQUEST,
  SAVE_QASET_REQUEST,
  EDIT_QASET_REQUEST,
  CHECK_NAME_REQUEST,
  CHECK_NAME_RESPONSE,
  REMOVE_QASET_REQUEST,
  EXPORT_SETS_REQUEST,
  CLEAR_EXPORT_REQUEST,
  IMPORT_SETS_REQUEST,
  IMPORT_SETS_RESPONSE
} = Actions;
const initialState: Infrastructure.IEditQASetState = {
  qaSetNames: [],
  selectedQASet: null,
  isEditing: false,
  nameIsOkay: false,
  importResult: null,
  exportData: null,
  showImport: false
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
    case CHECK_NAME_REQUEST:
      stateAddition.nameIsOkay = action.payload;
      break;
    case REMOVE_QASET_REQUEST:
      stateAddition.qaSetNames = action.payload;
      break;
    case EXPORT_SETS_REQUEST:
      stateAddition.exportData = action.payload;
      break;
    case CLEAR_EXPORT_REQUEST:
      stateAddition.exportData = initialState.exportData;
    case IMPORT_SETS_REQUEST:
      stateAddition.importResult = action.payload;
    case IMPORT_SETS_RESPONSE:
      stateAddition.importResult = action.payload;
    default:
      break;
  }
  return assign({}, state, stateAddition);
};
