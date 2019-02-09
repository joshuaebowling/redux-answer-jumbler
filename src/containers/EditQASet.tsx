/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import EditQASet from "../components/EditQASet";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => {
  return {
    QASetName: state.editQASets.QASetNames,
    SelectedSet: state.editQASets.selectedQASet,
    isEditing: state.editQASets.isEditing
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getQASet: (name: string) => {
      console.log("container getquaswetnames");
      dispatch(Actions.getQASetNames());
    },
    editQASet: (name: string) => dispatch(Actions.editQASet(name)),
    saveQASet: (item: Models.QuestionAnswerSet) =>
      dispatch(Actions.saveQASet(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditQASet);
