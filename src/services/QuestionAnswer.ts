/// <reference path="../index.d.ts" />
const QuestionAnswer: Services.IQuestionAnswer = {
  createModel: (question, answer) => ({ question, answer })
};
const collection: Array<Models.IQuestionAnswer> = [
  QuestionAnswer.createModel("Proximal", `IDK yet`),
  QuestionAnswer.createModel("Inferior", `AAAIDK yet`)
];

export default () => collection;
