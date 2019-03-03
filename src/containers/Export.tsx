/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import Export from "../components/Export";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => {
  return {
    exportData: state.editQASets.exportData
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    dismiss: () => dispatch(Actions.clearExport())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Export);
