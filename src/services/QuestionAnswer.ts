/// <reference path="../index.d.ts" />
import Basil from "basil.js";

const store = new Basil({
  namespace: "QuestionAnswerJumbler",
  storages: ["cookie", "local"],
  storage: "local",
  expireDays: 365
});

const questionAnswerStore = {};

const QuestionAnswer: Services.IQuestionAnswer = {
  find: (name: string) => JSON.parse(store.get(name)),
  update: (item: Models.QuestionAnswerSet) =>
    store.set(item.name, JSON.stringify(item.questionAnswers)),
  remove: (name: string) => {
    store.remove(name);
  },
  getNames: () => store.keys(),
  createModel: (id, question, answer) => ({ id, question, answer })
};
const collection: Array<Models.IQuestionAnswer> = [
  QuestionAnswer.createModel(1, "Proximal", `IDK yet`),
  QuestionAnswer.createModel(2, "Inferior", `AAAIDK yet`),
  QuestionAnswer.createModel(3, "Anterior", "Toward the Front"),
  QuestionAnswer.createModel(4, "Posterior", "Toward the Back"),
  QuestionAnswer.createModel(5, "Median", "On the Midline"),
  QuestionAnswer.createModel(6, "Medial", "Toward the Middle"),
  QuestionAnswer.createModel(7, "Lateral", "Toward the Side"),
  QuestionAnswer.createModel(8, "Superior", "Toward the Top")
];

const collectionMap: object = (coll => {
  var result = {};
  coll.forEach(qa => (result[qa.id] = qa));
  return result;
})(collection);
export default () => collectionMap;
