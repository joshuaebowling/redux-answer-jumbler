/// <reference path="../index.d.ts" />

import React from "react";
import { Formik, FieldArray, Form, Field } from "formik";
import { assign } from "lodash";
const newQASet: Models.QuestionAnswerSet = {
  name: "test",
  questionAnswers: [{ question: "quesiton", answer: "answer", id: 0 }]
};
class EditQASet extends React.Component {
  constructor(props: ComponentArguments.IQASet) {
    super(props);

    console.log("", props);
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
    console.log(this.QASet);
    return (
      <div>
        <h3>{this.QASet.name}</h3>

        <Formik
          initialValues={{
            name: this.QASet.name,
            questionAnswers: this.QASet.questionAnswers,
            test: "test"
          }}
          onSubmit={values =>
            setTimeout(() => {
              // this.qaSet.questionAnswers = assign({}, values.questionAnswers);
              this.props.saveQASet(values);
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={formProps => (
            <Form>
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
                              type="hidden"
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
                                console.log("qa", qa);
                                arrayHelpers.insert(index, {
                                  id: index + 1,
                                  question: qa.question,
                                  answer: qa.answer
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
                          arrayHelpers.push({ id: 0, question: "", answer: "" })
                        }
                      >
                        {/* show this when user has removed all friends from the list */}
                        Add a friend
                      </button>
                    )}
                    <div>
                      <button type="submit">Submit</button>
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
