import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import BitesWrapper from '../components/BitesWrapper';
import * as BiteActions from '../actions/bites';

function mapStateToProps(state) {
  return {
    bitesState: state.bites
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(BiteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BitesWrapper);
