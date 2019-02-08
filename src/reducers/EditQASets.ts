/// <reference path="../index.d.ts" />
import { assign } from "lodash";

const initialState: Infrastructure.IEditQASetState = {
  collections: [],
  selectedCollection: null,
  isEditing: false
};

export default (
  state: Infrastructure.IEditQASetState = initialState,
  action: Infrastructure.Action
) => {
  return assign({}, state);
};
