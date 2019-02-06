declare namespace Models {
  class QuestionAnswer {
    question: string;
    answer: string;
    id: number;
  }
  interface IModelAvailability {
    used: string;
    available: string;
    selected: string;
    correct: string;
    incorrect: string;
  }
  class VMQuestionAnswer {
    questionModel: QuestionAnswer;
    answerModel: QuestionAnswer;
    questionAvailability:
      | "used"
      | "available"
      | "selected"
      | "correct"
      | "incorrect";
    answerAvailability:
      | "used"
      | "available"
      | "selected"
      | "correct"
      | "incorrect";
    id: number;
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
    payload: object | number;
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
    answerOrder: Array<number>;
    onAnswerSelect(): (answerId: number) => void;
    onQuestionSelect(): (questionId: number) => void;
  }

  interface IUtilities {
    createViewModel: (model: Models.QuestionAnswer) => Models.QuestionAnswer;
    gradeResults: (collection: object, answers: object) => void;
  }
}

declare namespace ComponentArguments {
  interface IQuestionAnswer {
    viewModel: Models.VMQuestionAnswer;
    onSelect(): (id: number) => void;
    stateClass: string;
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
    REMOVE_RESULT: string;
    CLEAR_RESULTS: string;
    GRADE_REQUEST: string;
    get: () => (dispatch: Function) => void;
    applyAnswer: (answerId: number) => (dispatch: Function) => void;
    applyQuestion: (answerId: number) => (dispatch: Function) => void;
    clearAllResults: () => (dispatch: Function) => void;
    removeResult: (id: number) => (dispatch: Function) => void;
    grade: () => (dispatch: Function) => void;
  }
}
