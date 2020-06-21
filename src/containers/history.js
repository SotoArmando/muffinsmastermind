import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// CodemakerHist: [],
// CodebreakerHist: [],
// CodemakerTarget: 0,
// CodebreakerTarget: 0,
// isPlayer1turn: true,
// isOneplayer: true,
// Turn: -1,
// Codebreakerchecked: ["", "", "", ""],
// Codemakerchecked: ["", "", "", ""],
// Secret: [],
// isActiveGame: false,
// isThereWinner: false

function History(props) {
    const { handleClick, mastermindhistory } = props;
    debugger;
    return <div className="Tablehistory" onClick={() => handleClick("TOGGLE_CASE_GAMEHIST")}>
        {mastermindhistory.map((e, i) =>
            <pre className="historyline" key={e, i}>

                {(e.Turn % 2 === 1) ?
                    <div class="line">
                        <span>Codemaker (Player 2) played</span>
                        <div className="row centered">{e.Codemakerchecked.map(e => <div className={"ball mini " + e}></div>)}</div>
                    </div> :
                    <div class="line">
                        <span>Codebreaker (Player 1) played</span>
                        <div className="row centered">{e.Codebreakerchecked.map(e => {
                            debugger;
                            return <div className={"ball mini " + e}></div>
                        })}</div>
                    </div>}

            </pre>)}
    </div>
}

const mapStateToProps = (state) => {
    return { mastermindhistory: state.mastermindhistory }
};

History.propTypes = {
    handleClick: PropTypes.func.isRequired,
    mastermindhistory: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(History);