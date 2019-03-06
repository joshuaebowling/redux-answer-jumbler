/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import Import from "../components/Import";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => {
  console.log("fired");
  return {
    importResult: state.editQASets.importResult,
    showImport: state.editQASets.showImport
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    dismiss: () => dispatch(Actions.clearImport())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Import);
