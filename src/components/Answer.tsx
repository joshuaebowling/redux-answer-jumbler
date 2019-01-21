/// <reference path="../index.d.ts" />
import React from "react";
const Answer = ({
  viewModel,
  onSelect
}: ComponentArguments.IQuestionAnswer) => (
  <div
    onClick={() => {
      onSelect(viewModel.id);
    }}
  >
    {viewModel.questionModel.answer}
  </div>
);

export default Answer;
