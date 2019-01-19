/// <reference path="./index.d.ts" />
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReduxStore from "./ReduxStore";
const { dispatch, subscribe, getState } = ReduxStore;
import { QuestionAnswer } from "./actions";
import QuestionAnswerComponent from "./containers/QuestionAnswer";
import "./styles.css";
function App() {
  return (
    <Provider store={ReduxStore}>
      <div className="App">
        <QuestionAnswerComponent />
      </div>
    </Provider>
  );
}

dispatch(QuestionAnswer.get());

const rootElement = document.getElementById("root");
render(<App />, rootElement);
