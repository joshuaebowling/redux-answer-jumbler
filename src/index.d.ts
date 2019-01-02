declare namespace Models {
  class QuestionAnswer {
    question: string;
    answer: string;
  }

  class VMQuestionAnswer {
    question: QuestionAnswer;
    answer: QuestionAnswer;
    isAnswered: boolean;
  }
}

declare namespace Services {
  interface IQuestionAnswser {
    createModel: (question: string, answer: string) => Models.IQuestionAnswer;
  }
}

declare namespace Infrastructure {
  class Action {
    type: string;
    payload: object;
  }

  interface IState {
    collection: Map<number, Models.QuestionAnswer>;
    results: Map<number, Models.VMQuestionAnswer>;
    isComplete: boolean;
    isLoaded: boolean;
    currentAnswer: Models.VMQuestionAnswer;
  }
}

declare namespace Actions {
  interface IQuestionAnswer {
    COLLECTION_REQUEST: string;
    COLLECTION_RESPONSE: string;
    APPLY_ANSWER_REQUEST: string;
    APPLY_ANSWER_RESPONSE: string;
    START_ANSWERING: string;
    get(): () => (dispatch: Function) => void;
    startAnswering(): (answerId: number) => (dispatch: Function) => void;
  }
}
