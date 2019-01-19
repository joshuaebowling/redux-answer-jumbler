/// <reference path="../index.d.ts" />
import React from "react";

const QuestionAnswer = ({ viewModel, onClick }) => (
  <div onClick={onClick}>{viewModel.questionModel.question}</div>
);

export default QuestionAnswer;
