/// <reference path="../index.d.ts" />

import React from "react";
import { Link, Redirect } from "react-router-dom";
import { Formik, FieldArray, Form, Field } from "formik";
import { assign, keys } from "lodash";
const newQASet: Models.QuestionAnswerSet = {
  name: "",
  questionAnswers: []
};
class EditQASet extends React.Component {
  constructor(props: ComponentArguments.IQASet) {
    super(props);
    if (props.match.params.id === "0") {
      this.QASet = newQASet;
    } else {
      props.editQASet(props.match.params.id);
    }
  }
  componentWillUpdate(state: Infrastructure.IEditQASetState) {
    if (state.selectedQASet && this.QASet == null) {
      this.QASet = state.selectedQASet;
    }
  }
  QASet: Models.QuestionAnswerSet = null;
  render() {
    if (!this.QASet) return <h3>loading</h3>;
    return (
      <div>
        <h6>
          There's no validation on this form so if you want to pass hacky data
          into your localstorage then be my guest.
        </h6>
        <Formik
          initialValues={{
            name: this.QASet.name,
            questionAnswers: this.QASet.questionAnswers,
            saved: this.QASet.name !== ""
          }}
          checkName={this.props.checkName}
          onSubmit={values => {
            this.props.saveQASet(values);
            alert("Set saved, redirecting to set list");
            return this.props.history.push("/collection");
          }}
          validate={values => {
            const errors = {};
            if (values.saved) {
              return errors;
            }
            if (!this.props.nameIsOkay) {
              errors.nameIsOkay = "the set name is already in use";
            }
            if (values.name === "") {
              errors.nameIsOkay = "please enter a name for the set";
            }
            return errors;
          }}
          render={formProps => (
            <Form>
              <Field
                name="name"
                type={formProps.values.saved ? "hidden" : "input"}
                placeholder="Name the Set"
                style={{
                  border: formProps.errors.nameIsOkay
                    ? "3px solid red"
                    : "1px solid green"
                }}
                onKeyUp={this.props.checkName(formProps.values.name)}
              />
              {formProps.values.saved ? (
                <h3>{this.QASet.name}</h3>
              ) : (
                <h3>{this.QASet.name}</h3>
              )}

              <FieldArray
                name="questionAnswers"
                render={arrayHelpers => (
                  <div>
                    {formProps.values.questionAnswers &&
                    formProps.values.questionAnswers.length > 0 ? (
                      formProps.values.questionAnswers.map((qa, index) => {
                        return (
                          <div key={index}>
                            <Field
                              name={`values.questionAnswers[${index}].id`}
                              value={qa.id}
                              disabled
                            />
                            <Field
                              name={`questionAnswers[${index}].question`}
                              placeholder="Question"
                            />
                            <Field
                              name={`questionAnswers[${index}].answer`}
                              placeholder="Answer"
                            />

                            <button
                              type="button"
                              onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                            >
                              -
                            </button>
                            <button
                              type="button"
                              onClick={() => {
                                arrayHelpers.insert(index, {
                                  id:
                                    formProps.values.questionAnswers.length + 1,
                                  question: "",
                                  answer: ""
                                });
                              }} // insert an empty string at a position
                            >
                              +
                            </button>
                          </div>
                        );
                      })
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          arrayHelpers.push({ id: 1, question: "", answer: "" })
                        }
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a QuestionAnswer Pair
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
                      <Link to="/collection">Cancel</Link>
                      <p>{formProps.errors.nameIsOkay}</p>
                    </div>
                  </div>
                )}
              />
            </Form>
          )}
        />
      </div>
    );
  }
}

export default EditQASet;
