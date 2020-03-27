import Log from "./Log";
import { connect } from "react-redux";
import { loadLogService } from "../../redux/services/logService";
import { getClient, getAllTransactions } from "../../redux/selectors/bank";

const mapStateToProps = state => ({
  client: getClient(state),
  allTransactions: getAllTransactions(state)
});

const mapDispatchToProps = dispatch => ({
  loadLogService: () => loadLogService(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Log);