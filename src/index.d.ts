declare namespace Models {
  class QuestionAnswer {
    question: string;
    answer: string;
    id: number;
  }
  class QuestionAnswerSet {
    name: string;
    questionAnswers: Array<QuestionAnswer>;
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
  interface IModelAvailability {
    used: string;
    available: string;
    selected: string;
    correct: string;
    incorrect: string;
  }
}

declare namespace Services {
  interface IQuestionAnswser {
    createModel: (question: string, answer: string) => Models.QuestionAnswer;
    find: (name: string) => Models.QuestionAnswerSet;
    update: (item: Models.QuestionAnswerSet) => void;
    remove: (string: name) => void;
    getNames: () => Array<string>;
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

  interface IEditQASetState {
    collections: Array<string>;
    selectedCollection: Models.QuestionAnswerSet;
    isEditing: boolean;
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
  interface ICollectionNames {
    QuestionAnswer: string;
  }
  interface ReducerArguments {
    state: Infrastructure.IEditQASetState;
    action: Infrastructure.Action;
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
  interface IEditQASets {
    EDIT_QASET_REQUEST: string;
    SAVE_QASET_REQUEST: string;
    RETRIEVE_QASET_NAMES: string;
    getQaSetNames: () => (dispatch: Function) => void;
    editQaSet: () => (dispatch: Function) => void;
    saveQaSet: (item: Models.QuestionAnswerSet) => void;
  }
}
