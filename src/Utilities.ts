/// <reference path="./index.d.ts" />
import { ModelAvailability } from "./constants";

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
  }
};

console.log(Utilities);
export default Utilities;
