import PlayersTitular from "./PlayersTitular"
import { connect } from "react-redux"
import {giveBack, addScrub} from '../../redux/actions/selection'

const mapStateToProps = state => ({
  players: state.selection.titulars
});

const mapDispatchToProps = dispatch => ({
  giveBack: player => giveBack(player, dispatch),
  addScrub: player => addScrub(player, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayersTitular);