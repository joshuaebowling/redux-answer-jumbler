/// <reference path="../index.d.ts" />
import React from "react";
import { ModelAvailability } from "../constants";

const Answer = ({
  viewModel,
  onSelect,
  stateClass
}: ComponentArguments.IQuestionAnswer) => (
  <div
    onClick={() => {
      if (stateClass === ModelAvailability.available) {
        console.log("available ");
        onSelect(viewModel.id);
      } else {
        console.log("not available");
      }
    }}
    className={stateClass}
  >
    {viewModel.questionModel.answer}
  </div>
);

export default Answer;
