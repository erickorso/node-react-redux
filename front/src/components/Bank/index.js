import Bank from "./Bank";
import { connect } from "react-redux";
import { saveLogService } from "../../redux/services/logService";
import {
  setTransaction,
  updateCash,
  updateCredit,
  updatePasword,
  clearTransaction
} from "../../redux/actions/bank";
import {
  getClient,
  getClientCash,
  getClientCredit,
  getDebtCredit,
  getCurrentOperation,
  getLastTransaction
} from "../../redux/selectors/bank";

const mapStateToProps = state => ({
  client: getClient(state),
  cash: getClientCash(state),
  credit: getClientCredit(state),
  debt: getDebtCredit(state),
  transaction: getCurrentOperation(state),
  lastTransaction: getLastTransaction(state)
});

const mapDispatchToProps = dispatch => ({
  saveLogService: transaction => saveLogService(transaction, dispatch),
  setTransaction: transaction => setTransaction(transaction, dispatch),
  setCash: cash => updateCash(cash, dispatch),
  setCredit: cash => updateCredit(cash, dispatch),
  updatePasword: transaction => updatePasword(transaction, dispatch),
  clearTransaction: () => clearTransaction(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Bank);