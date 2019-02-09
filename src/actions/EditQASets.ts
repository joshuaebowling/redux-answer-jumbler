/// <reference path="../index.d.ts" />
import { QuestionAnswer } from "../services/QuestionAnswer";
export const EditQASets: Actions.IEditQASets = {
  EDIT_QASET_REQUEST: "EDIT_QASET_REQUEST",
  SAVE_QASET_REQUEST: "SAVE_QASET_REQUEST",
  QASET_NAMES_REQUEST: "RETRIEVE_QASET_NAMES",
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
  }
};
