/// <reference path="../index.d.ts" />
import React from "react";

const Result = ({
  questionModel,
  answerModel,
  onDeSelect
}: ComponentArguments.IQuestionAnswer) => (
  <div>
    <span>{questionModel.question}</span>/<span>{answerModel.answer} </span>
    <button onClick={() => onDeSelect(questionModel.id)}>x</button>
  </div>
);

export default Result;
