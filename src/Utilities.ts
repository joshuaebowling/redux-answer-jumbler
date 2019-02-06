/// <reference path="./index.d.ts" />
import { ModelAvailability } from "./constants";
import { each } from "lodash";
const Utilities: Infrastructure.IUtilities = {
  createViewModel: (model: Models.QuestionAnswer) => {
    const viewModel: Models.VMQuestionAnswer = {
      questionAvailability: ModelAvailability.available,
      answerAvailability: ModelAvailability.available,
      questionModel: model,
      answerModel: null,
      id: model.id
    };
    return viewModel;
  },
  gradeResults: (collection: object, answers: object) => {
    each(collection, (qa: Models.VMQuestionAnswer) => {
      console.log(qa.id, answers[qa.id]);
      if (qa.id !== answers[qa.id]) {
        qa.answerAvailability = ModelAvailability.incorrect;
        qa.questionAvailability = ModelAvailability.incorrect;
      } else {
        qa.answerAvailability = ModelAvailability.correct;
        qa.questionAvailability = ModelAvailability.correct;
      }
    });
  }
};

export default Utilities;
