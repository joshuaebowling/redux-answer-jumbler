/// <reference path="../index.d.ts" />

import React from "react";
import { Link, Route } from "react-router-dom";
import { map } from "lodash";

import EditQASet from "../containers/EditQASet";

class EditQASets extends React.Component {
  constructor(props: ComponentArguments.IQASets) {
    super(props);
    console.log(props);
    props.getQASetNames();
  }
  componentWillUpdate(state: Infrastructure.IEditQASetState) {
    this.renderQASets(state.QASetNames);
  }
  render() {
    return (
      <div>
        <h1>Manage QuestionAnswer Sets</h1>
        <button onClick={this.props.exportSets}>Export</button>
        <button onClick={this.props.showImport}>Import</button>
        <Link to={`/edit/id/0`}>Add New</Link>

        <ul> {this.qaSetNames}</ul>
      </div>
    );
  }
  qaSetNames = [];
  renderQASets(qaSets: Array<string>) {
    this.qaSetNames = map(qaSets, qaset => (
      <li key={qaset}>
        {qaset}
        &nbsp;
        <button onClick={e => this.props.removeQASet(qaset)}>x</button>
        &nbsp;
        <Link to={`/edit/id/${qaset}`}>Edit</Link>
        &nbsp;
        <Link to={`/qa/${qaset}`}>Practice Set</Link>
      </li>
    ));
  }
}

export default EditQASets;
