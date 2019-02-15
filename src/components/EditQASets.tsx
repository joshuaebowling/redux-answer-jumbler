/// <reference path="../index.d.ts" />

import React from "react";
import { Link, Route } from "react-router-dom";
import { map } from "lodash";

import EditQASet from "../containers/EditQASet";

class EditQASets extends React.Component {
  constructor(props: ComponentArguments.IQASets) {
    super(props);
    props.getQASetNames();
  }
  componentWillUpdate(state: Infrastructure.IEditQASetState) {
    this.renderQASets(state.QASetNames);
  }
  render() {
    return (
      <div>
        <h1>Manage QuestionAnswer Sets</h1>
        <Link to={`/edit/id/0`}>Add New</Link>
        <ul> {this.qaSetNames}</ul>
      </div>
    );
  }
  qaSetNames = [];
  renderQASets(qaSets: Array<string>) {
    this.qaSetNames = map(qaSets, qaset => (
      <li key={qaset}>
        {qaset} <Link to={`/edit/id/${qaset}`}>Edit</Link>
        <Link to={`/qa/${qaset}`}>Practice Set</Link>
      </li>
    ));
  }
}

export default EditQASets;
