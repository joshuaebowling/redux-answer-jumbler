/// <reference path="../index.d.ts" />

import React from "react";
import { Link, Route } from "react-router-dom";
import { map } from "lodash";

import EditQASet from "./EditQASet";

class EditQASets extends React.Component {
  constructor(props: ComponentArguments.IQASets) {
    super(props);
    props.getQASetNames();
  }
  componentWillUpdate(state: Infrastructure.IEditQASetState) {
    this.renderQASets(state.QASetNames);
  }
  render() {
    console.log(this.props.match);
    return (
      <div>
        <h1>Manage QuestionAnswer Sets</h1>
        <Link to={`${this.props.match.url}/id/0`}>Add New</Link>
        <ul> {this.qaSetNames}</ul>
        <Route
          path={`${this.props.match.url}/id/:id`}
          component={EditQASet}
          qaSet={null}
        />
      </div>
    );
  }
  qaSetNames = [<li key="1">test</li>];
  renderQASets(qaSets: Array<string>) {
    this.qaSetNames = map(qaSets, qaset => <li>{qaset}</li>);
  }
}

export default EditQASets;
