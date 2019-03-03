/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import EditQASets from "../components/EditQASets";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => ({
  QASetNames: state.editQASets.qaSetNames,
  selectedQASet: state.editQASets.selectedQASet,
  isEditing: state.editQASets.isEditing,
  exportData: state.editQASets.exportData
});

const mapDispatchToProps = (dispatch: Function) => {
  return {
    getQASetNames: () => {
      dispatch(Actions.getQASetNames());
    },
    editQASet: (name: string) => dispatch(Actions.editQASet(name)),
    saveQASet: (item: Models.QuestionAnswerSet) =>
      dispatch(Actions.saveQASet(item)),
    getQASet: (name: string) => dispatch(Actions.getQASet(name)),
    removeQASet: (name: string) => dispatch(Actions.removeQASet(name)),
    importSets: (sets: string) => dispatch(Actions.importSets(sets)),
    exportSets: () => dispatch(Actions.exportSets())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditQASets);
