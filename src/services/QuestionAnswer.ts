/// <reference path="../index.d.ts" />
import Basil from "basil.js";

const store = new Basil({
  namespace: "QuestionAnswerJumbler",
  storages: ["cookie", "local"],
  storage: "local",
  expireDays: 365
});

const questionAnswerStore = {};

export const QuestionAnswer: Services.IQuestionAnswer = {
  find: (name: string) => JSON.parse(store.get(name)),
  update: (item: Models.QuestionAnswerSet) =>
    store.set(item.name, JSON.stringify(item.questionAnswers)),
  remove: (name: string) => {
    store.remove(name);
  },
  getNames: () => store.keys(),
  createModel: ({ name, questionAnswers }: Models.QuestionAnswerSet) => ({
    name,
    questionAnswers
  }),
  createQAModel: (id, answer, question) => ({ id, answer, question })
};
const collection: Array<Models.IQuestionAnswer> = [
  QuestionAnswer.createQAModel(1, "Proximal", `IDK yet`),
  QuestionAnswer.createQAModel(2, "Inferior", `AAAIDK yet`),
  QuestionAnswer.createQAModel(3, "Anterior", "Toward the Front"),
  QuestionAnswer.createQAModel(4, "Posterior", "Toward the Back"),
  QuestionAnswer.createQAModel(5, "Median", "On the Midline"),
  QuestionAnswer.createQAModel(6, "Medial", "Toward the Middle"),
  QuestionAnswer.createQAModel(7, "Lateral", "Toward the Side"),
  QuestionAnswer.createQAModel(8, "Superior", "Toward the Top")
];

const collectionMap: object = (coll => {
  var result = {};
  coll.forEach(qa => (result[qa.id] = qa));
  return result;
})(collection);
console.log("colmap", collection);
export default () => collectionMap;
