/// <reference path="./index.d.ts" />
import { ModelAvailability } from "./constants";
import { each, remove, keys } from "lodash";
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
  },
  createAnswerOrder: (collection: object) => {
    function getRandomInt(min, max): number {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    }

    const generateRandomOrderedNumber = (
      numberSet: Array<number>,
      resultSet: object
    ): object => {
      var key: number = numberSet[numberSet.length - 1];
      var availableNumbers: Array<number> = numberSet.map(num => parseInt(num));

      while (numberSet.length > 0) {
        resultSet[key] =
          availableNumbers[getRandomInt(0, availableNumbers.length)];
        console.log(resultSet[key] + 1);
        numberSet.pop();
        remove(availableNumbers, num => num === resultSet[key]);
        key = numberSet[numberSet.length - 1];
      }
      return resultSet;
    };
    // returns an object with the key as the
    // input number
    // and the ordered unique whole random number
    // as the value
    const randomizeSetOrder = (numberSet: Array<number>): object => {
      return generateRandomOrderedNumber(numberSet, {});
    };
    return randomizeSetOrder(keys(collection));
  }
};

export default Utilities;
