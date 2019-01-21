/// <reference path="../index.d.ts" />
import React from "react";

const QuestionAnswer = ({
  viewModel,
  onSelect
}: ComponentArguments.IQuestionAnswer) => (
  <div
    onClick={() => {
      onSelect(viewModel.id);
    }}
  >
    {viewModel.questionModel.question}
  </div>
);

export default QuestionAnswer;
