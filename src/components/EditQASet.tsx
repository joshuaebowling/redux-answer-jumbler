/// <reference path="../index.d.ts" />

import React from "react";
import { Formik, FieldArray, Form, Field } from "formik";
const newQASet: Models.QuestionAnswerSet = {
  name: "test",
  questionAnswers: [{ question: "quesiton", answer: "answer", id: 0 }]
};
class EditQASet extends React.Component {
  constructor(props: ComponentArguments.IQASet) {
    super(props);
    if (props.match.params.id === 0) {
      this.QASet = newQASet;
    } else {
      props.getQASet(props.match.id);
    }
  }
  componentWillUpdate(state: Infrastructure.IEditQASetState) {
    if (state.selectedQASet) {
      this.QASet = state.selectedQASet;
    }
  }
  QASet: Models.QuestionAnswerSet = null;
  render() {
    return (
      <div>
        <h3>Question Answers</h3>
        <Formik
          initialValues={{
            name: newQASet.name,
            questionAnswers: newQASet.questionAnswers
          }}
          onSubmit={values =>
            setTimeout(() => {
              console.log(values);
              alert(JSON.stringify(values, null, 2));
            }, 500)
          }
          render={({ values }) => (
            <Form>
              <Field
                name="name"
                onChange={e => (values.name = e.currentTarget.value)}
                placeholder="Set Name"
              />
              <FieldArray
                name="questionAnswers"
                render={arrayHelpers => (
                  <div>
                    {values.questionAnswers &&
                    values.questionAnswers.length > 0 ? (
                      values.questionAnswers.map((qa, index) => (
                        <div key={index}>
                          <Field
                            name={`qa.id`}
                            value={`${index}`}
                            type="hidden"
                          />
                          <Field
                            name={`qa.question`}
                            onChange={e =>
                              (qa.question = e.currentTarget.value)
                            }
                            placeholder="Question"
                          />
                          <Field
                            name={`qa.answer`}
                            placeholder="Answer"
                            onChange={e => (qa.answer = e.currentTarget.value)}
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
                      ))
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
