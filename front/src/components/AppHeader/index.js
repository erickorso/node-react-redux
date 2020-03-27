import AppHeader from "./AppHeader";
import { connect } from "react-redux";
import {
  countPlayers,
  countAllPlayers
} from "../../redux/selectors/selection";

const mapStateToProps = state => ({
  availables: countPlayers(state),
  countAllPlayers: countAllPlayers(state)
});

export default connect(mapStateToProps, null)(AppHeader);