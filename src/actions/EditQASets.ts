/// <reference path="../index.d.ts" />
import { QuestionAnswer } from "../services/QuestionAnswer";
import { chain, isString, find } from "lodash";

export const EditQASets: Actions.IEditQASets = {
  EDIT_QASET_REQUEST: "EDIT_QASET_REQUEST",
  SAVE_QASET_REQUEST: "SAVE_QASET_REQUEST",
  QASET_NAMES_REQUEST: "RETRIEVE_QASET_NAMES",
  CHECK_NAME_REQUEST: "CHECK_NAME_REQUEST",
  CHECK_NAME_RESPONSE: "CHECK_NAME_RESPONSE",
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
      .find(name)
      .isString()
      .value();
    console.log("anemisuse", nameInUse);
    dispatch({
      type: EditQASets.CHECK_NAME_REQUEST,
      payload: nameInUse
    });
  }
};
