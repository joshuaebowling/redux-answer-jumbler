/// <reference path="../index.d.ts" />

const initialState: Infrastructure.IEditQASetState = {
  collections: [],
  selectedCollection: null,
  isEditing: false
};

export default (
  state: Infrastructure.IEditQASetState = initialState,
  action: Infrastructure.Action
) => {};
