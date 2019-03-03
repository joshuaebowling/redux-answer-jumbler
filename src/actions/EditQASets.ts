/// <reference path="../index.d.ts" />
import { QuestionAnswer } from "../services/QuestionAnswer";
import { chain, isUndefined, find } from "lodash";

export const EditQASets: Actions.IEditQASets = {
  EDIT_QASET_REQUEST: "EDIT_QASET_REQUEST",
  SAVE_QASET_REQUEST: "SAVE_QASET_REQUEST",
  QASET_NAMES_REQUEST: "RETRIEVE_QASET_NAMES",
  CHECK_NAME_REQUEST: "CHECK_NAME_REQUEST",
  CHECK_NAME_RESPONSE: "CHECK_NAME_RESPONSE",
  REMOVE_QASET_REQUEST: "REMOVE_QASET_REQUEST",
  EXPORT_SETS_REQUEST: "EXPORT_SETS_REQUEST",
  CLEAR_EXPORT_REQUEST: "EXPORT_CLEAR_REQUEST",
  IMPORT_SETS_REQUEST: "IMPORT_SETS_REQUEST",
  IMPORT_SETS_RESPONSE: "IMPORT_SETS_RESPONSE",

  getQASetNames: () => (dispatch: Function) => {
    dispatch({
      type: EditQASets.QASET_NAMES_REQUEST,
      payload: QuestionAnswer.getNames()
    });
  },
  editQASet: (name: string) => (dispatch: Function) => {
    const qaSet: Models.QuestionAnswerSet = {
      name: name,
      questionAnswers: QuestionAnswer.find(name)
    };
    dispatch({
      type: EditQASets.EDIT_QASET_REQUEST,
      payload: qaSet
    });
  },
  saveQASet: (item: Models.QuestionAnswerSet) => (dispatch: Function) => {
    QuestionAnswer.update(item);
    dispatch({
      type: EditQASets.SAVE_QASET_REQUEST,
      payload: QuestionAnswer.getNames()
    });
  },
  checkName: (name: string) => (dispatch: Function) => {
    const nameInUse: boolean = chain(QuestionAnswer.getNames())
      .find((qaName: string) => {
        console.log(`${name}=${qaName}`);
        return name.toLowerCase() === qaName.toLowerCase();
      })
      .isUndefined()
      .value();
    dispatch({
      type: EditQASets.CHECK_NAME_REQUEST,
      payload: nameInUse
    });
  },
  removeQASet: (name: string) => (dispatch: Function) => {
    QuestionAnswer.remove(name);
    dispatch({
      type: EditQASets.REMOVE_QASET_REQUEST,
      payload: QuestionAnswer.getNames()
    });
  },
  exportSets: () => (dispatch: Function) => {
    const sets: object = QuestionAnswer.exportSets();
    dispatch({ type: EditQASets.EXPORT_SETS_REQUEST, payload: sets });
  },
  importSets: (sets: string) => (dispatch: Function) => {
    dispatch({ type: EditQASets.IMPORT_SETS_REQUEST, payload: null });
    const result: Response.IQuestionAnswerImport = QuestionAnswer.importSets(
      sets
    );
    dispatch({ type: EditQASets.IMPORT_SETS_RESPONSE, payload: result });
  },
  clearExport: () => (dispatch: Function) => {
    dispatch({ type: EditQASets.CLEAR_EXPORT_REQUEST, payload: null });
  }
};
