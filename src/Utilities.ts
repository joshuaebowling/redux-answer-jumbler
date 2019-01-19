/// <reference path="./index.d.ts" />
const Utilities: Infrastructure.IUtilities = {
  createViewModel: (
    model: Models.QuestionAnswer,
    onReceiveAnswer: () => void
  ) => {
    const viewModel: Models.VMQuestionAnswer = {
      isAnswered: false,
      questionModel: model,
      answerModel: null,
      id: model.id,
      onReceiveAnswer
    };
    return viewModel;
  }
};

console.log(Utilities);
export default Utilities;
