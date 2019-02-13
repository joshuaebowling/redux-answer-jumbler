/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import EditQASet from "../components/EditQASet";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => {
  return {
    QASetNames: state.editQASets.QASetNames,
    selectedQASet: state.editQASets.selectedQASet,
    isEditing: state.editQASets.isEditing,
    nameIsOkay: state.editQASets.nameIsOkay
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    getQASet: (name: string) => {
      dispatch(Actions.getQASetNames());
    },
    editQASet: (name: string) => dispatch(Actions.editQASet(name)),
    saveQASet: (item: Models.QuestionAnswerSet) =>
      dispatch(Actions.saveQASet(item)),
    checkName: (name: string) => dispatch(Actions.checkName(name))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditQASet);
