/// <reference path="../index.d.ts" />
import React from "react";

const QuestionAnswer = ({
  viewModel,
  onSelect,
  stateClass
}: ComponentArguments.IQuestionAnswer) => (
  <div
    onClick={() => {
      onSelect(viewModel.id);
    }}
    className={stateClass}
  >
    {viewModel.questionModel.question}
  </div>
);

export default QuestionAnswer;
