/// <reference path="./index.d.ts" />
import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReduxStore from "./ReduxStore";
const { dispatch, subscribe, getState } = ReduxStore;
import { QuestionAnswer } from "./actions";
import QuestionAnswerComponent from "./containers/QuestionAnswer";
import About from "./components/About";
import EditQASets from "./containers/EditQASets";
import EditQASet from "../src/containers/EditQASet";
import "./styles.css";
function App() {
  return (
    <div className="App">
      <Provider store={ReduxStore}>
        <Router>
          <div>
            <Link to="/">About</Link>
            <Link to="/try">Try</Link>
            <Link to="/collection">View Collection</Link>
            <Route path="/" exact component={About} />
            <Route path="/try" component={QuestionAnswerComponent} />
            <Route path="/collection" component={EditQASets} />
            <Route path={`/edit/id/:id`} component={EditQASet} />
          </div>
        </Router>
      </Provider>
    </div>
  );
}

dispatch(QuestionAnswer.get());
const rootElement = document.getElementById("root");
render(<App />, rootElement);
