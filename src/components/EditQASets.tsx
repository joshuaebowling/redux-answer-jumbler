import React from "react";
import { Formik } from "formik";
import { map } from "lodash";

class EditQASets extends React.Component {
  constructor(props) {
    super(props);
    props.getQASetNames();
  }
  componentWillUpdate(state) {}
  render() {
    return (
      <div>
        <h1>Edit Collection</h1>
        <ul> {this.qaSetNames}</ul>
      </div>
    );
  }
  qaSetNames = [<li key="1">test</li>];
  renderQASets(qaSets: Array<string>) {
    this.qaSetNames = map(qaSets, qaset => <li>{qaset}</li>);
  }
}

export default EditQASets;
