import * as React from "react";
import { render } from "react-dom";
import ReduxStore from "./ReduxStore";
const { dispatch, subscribe, getState } = ReduxStore;
import { QuestionAnswer } from "./actions";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
subscribe(() => {
  console.log(getState());
});

dispatch(QuestionAnswer.get());

const rootElement = document.getElementById("root");
render(<App />, rootElement);
