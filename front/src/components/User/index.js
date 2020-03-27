import User from "./User";
import { connect } from "react-redux";
import { loadUserService } from "../../redux/services/userService";
import { getUsers, countUsers } from "../../redux/selectors/users";

const mapStateToProps = state => ({
  users: getUsers(state),
  countUsers: countUsers(state)
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => loadUserService(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(User);