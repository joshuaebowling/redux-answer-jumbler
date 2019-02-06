/// <reference path="../index.d.ts" />
import { connect } from "react-redux";
import { values } from "lodash";
import EditCollection from "../components/EditCollection";

const mapStateToProps = (state: Infrastructure.IState) => ({});

const mapDispatchToProps = (dispatch: Function) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCollection);
