import PlayersScrub from "./PlayersScrub"
import { connect } from "react-redux"
import { addTitular, giveBack } from "../../redux/actions/selection"

const mapStateToProps = state => ({
  players: state.selection.scrubs
});

const mapDispatchToProps = dispatch => ({
  addTitular: player => addTitular(player, dispatch),
  giveBack: player => giveBack(player, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersScrub);