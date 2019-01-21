declare namespace Models {
  class QuestionAnswer {
    question: string;
    answer: string;
    id: number;
  }

  class VMQuestionAnswer {
    questionModel: QuestionAnswer;
    answerModel: QuestionAnswer;
    isAnswered: boolean;
    id: number;
    onReceiveAnswer: () => void;
  }
}

declare namespace Services {
  interface IQuestionAnswser {
    createModel: (question: string, answer: string) => Models.QuestionAnswer;
  }
}

declare namespace Infrastructure {
  class Action {
    type: string;
    payload: object;
  }

  interface IState {
    collection: object;
    answerOrder: object;
    results: object;
    isComplete: boolean;
    isLoaded: boolean;
    currentAnswer: Models.VMQuestionAnswer;
  }

  interface IQuestionAnswerProps {
    collection: Array<Models.VMQuestionAnswer>;
  }

  interface IUtilities {
    createViewModel: (model: Models.QuestionAnswer) => Models.QuestionAnswer;
  }
}

declare namespace ComponentArguments {
  interface IQuestionAnswer {
    viewModel: Models.VMQuestionAnswer;
  }
}

declare namespace Actions {
  interface IQuestionAnswer {
    COLLECTION_REQUEST: string;
    COLLECTION_RESPONSE: string;
    APPLY_ANSWER_REQUEST: string;
    APPLY_ANSWER_RESPONSE: string;
    APPLY_QUESTION_REQUEST: string;
    APPLY_QUESTION_RESPONSE: string;
    START_ANSWERING: string;
    STOP_ANSWERING: string;
    get(): () => (dispatch: Function) => void;
    startAnswering(): (answerId: number) => (dispatch: Function) => void;
  }
}
