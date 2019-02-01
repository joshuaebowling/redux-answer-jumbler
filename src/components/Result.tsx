/// <reference path="../index.d.ts" />
import React from "react";

const Result = ({
  questionModel,
  answerModel,
  onDeSelect
}: ComponentArguments.IQuestionAnswer) => (
  <div>
    <span>{questionModel.question}</span>/<span>{answerModel.answer} </span>
  </div>
);

export default Result;
