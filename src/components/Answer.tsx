/// <reference path="../index.d.ts" />
import React from "react";
const Answer = ({ viewModel }: ComponentArguments.IQuestionAnswer) => (
  <div>{viewModel.questionModel.answer}</div>
);

export default Answer;
