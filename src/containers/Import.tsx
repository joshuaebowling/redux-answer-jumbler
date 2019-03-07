/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import Import from "../components/Import";
import { EditQASets as Actions } from "../actions/EditQASets";

const mapStateToProps = (state: Infrastructure.IState) => {
  return {
    importResult: state.editQASets.importResult,
    showImport: state.editQASets.showImport
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    dismiss: () => dispatch(Actions.showImport()),
    import: (jsonSets: string) => dispatch(Actions.importSets(jsonSets))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Import);
