import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import QuestionAnswerReducer from "./QuestionAnswerReducer";
export default createStore(QuestionAnswerReducer, applyMiddleware(thunk));
