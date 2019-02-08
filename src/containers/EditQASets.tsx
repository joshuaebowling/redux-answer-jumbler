/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import EditQASets from "../components/EditQASets";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => ({
  QASetNames: state.editQASets.qaSetNames,
  selectedQASet: state.editQASets.selectedQASet,
  isEditing: state.editQASets.isEditing
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getQASetNames: () => dispatch(Actions.getQASetNames()),
    editQASet: (name: string) => dispatch(Actions.editQASet(name)),
    saveQASet: (item: Models.QuestionAnswerSet) =>
      dispatch(Actions.saveQASet(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditQASets);
