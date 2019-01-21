/// <reference path="../index.d.ts" />
import React from "react";

const QuestionAnswer = ({
  viewModel,
  onSelect
}: ComponentArguments.IQuestionAnswer) => (
  <div>
    <div>{viewModel.questionModel.question}</div>
    <div>{viewModel.answerModel ? viewModel.answerModel.answer : ""} </div>
  </div>
);

export default QuestionAnswer;
