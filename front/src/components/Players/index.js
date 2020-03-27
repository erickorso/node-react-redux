import Players from "./Players"
import { connect } from 'react-redux'
import { addTitular, addScrub } from "../../redux/actions/selection"
import {
  getPlayers
} from "../../redux/selectors/selection";

const mapStateToProps = state => ({
  players: getPlayers(state)
});

const mapDispatchToProps = dispatch => ({
  addTitular: player => addTitular(player, dispatch),
  addScrub: player => addScrub(player, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Players)