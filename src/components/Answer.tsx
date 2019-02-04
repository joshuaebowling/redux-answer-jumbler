/// <reference path="../index.d.ts" />
import React from "react";
const Answer = ({
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
    {viewModel.questionModel.answer}
  </div>
);

export default Answer;
