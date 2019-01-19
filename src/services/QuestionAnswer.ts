/// <reference path="../index.d.ts" />

const QuestionAnswer: Services.IQuestionAnswer = {
  createModel: (id, question, answer) => ({ id, question, answer })
};
const collection: Array<Models.IQuestionAnswer> = [
  QuestionAnswer.createModel(1, "Proximal", `IDK yet`),
  QuestionAnswer.createModel(2, "Inferior", `AAAIDK yet`)
];

const collectionMap: object = (coll => {
  var result = {};
  coll.forEach(qa => (result[qa.id] = qa));
  return result;
})(collection);
export default () => collectionMap;
