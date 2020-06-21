import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Gameover(props) {

    const { pushTable, handleClick, rollTurns, resetGame, isThereWinner, state } = props;
    const { Codebreakerchecked, Codemakerchecked, Turn, isOneplayer } = state;
    const isPlayer1turn = Turn % 2 === 0;
    const isPlayerready = (Codebreakerchecked.filter(e => e != "").length === 4 || (!isPlayer1turn && Codemakerchecked.filter(e => e != "").length > 0));

    const handlePlayerready = (Turn) => {
        rollTurns(Turn + 1, isOneplayer);
        pushTable(state);
    }

    const handleReset = (reset, container) => {
        handleClick("TOGGLE_CASE_GAMEWIN", container);
        if (reset) resetGame();
    }

    return (
        <div className="Gameover col">
            <div className={"Winner" + ((isThereWinner) ? ' active' : '')}>
                <span className="head1">We got a winner</span>
                <div className="col">
                    <span>Congrats to the Codebreaker/Codemaker</span>
                    <span>You got your code persist 10 round/ You discovered the code in #rounds</span>
                    <span>CONGRATS!</span>
                </div>
                <div className="row centered">
                    <span className="span0 border0 useraction margin1" onClick={(e) => handleReset(true, e.container)}>Play Again</span>
                </div>
                <span className="Close" onClick={(e) => handleReset(false, e.container)}>Close</span>
            </div>
            <div className={"isPlayerready " + (isPlayerready ? "active" : "")} onClick={() => handlePlayerready(Turn)}>
                <span>Done?</span>
                <span className="status">Tap here to continue</span>
            </div>
        </div >

    );
}

const mapStateToProps = (state) => ({
    state: { ...state.mastermind },
});

const mapDispatchtoProps = (dispatch) => ({
    pushTable: target => dispatch({ type: "PUSH_TABLE", table: target }),
    resetGame: () => dispatch({
        type: 'UPDATE', actionstate: {
            CodemakerHist: [],
            CodebreakerHist: [],
            CodemakerTarget: 0,
            CodebreakerTarget: 0,
            isPlayer1turn: true,
            isOneplayer: false,
            Turn: -1,
            Codebreakerchecked: ["", "", "", ""],
            Codemakerchecked: ["", "", "", ""],
            Secret: [],
        }
    }),
    rollTurns: (turn, isOneplayer) => {
        dispatch({ type: ((turn - 1) % 2 === 0) ? "endCodebreakerTurn" : "endCodemakerTurn", actionstate: { Turn: turn } })
        if (isOneplayer) {
            dispatch({ type: "endCodemakerTurn", actionstate: { Turn: turn + 1 } })
        }
    },
});


Gameover.propTypes = {
    pushTable: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
    rollTurns: PropTypes.func.isRequired,
    resetGame: PropTypes.func.isRequired,
    isThereWinner: PropTypes.bool.isRequired,
    state: PropTypes.exact({
        CodemakerHist: PropTypes.array.isRequired,
        CodebreakerHist: PropTypes.array.isRequired,
        CodemakerTarget: PropTypes.number.isRequired,
        CodebreakerTarget: PropTypes.number.isRequired,
        isPlayer1turn: PropTypes.bool.isRequired,
        isOneplayer: PropTypes.bool.isRequired,
        Turn: PropTypes.number.isRequired,
        Codebreakerchecked: PropTypes.array.isRequired,
        Codemakerchecked: PropTypes.array.isRequired,
        Secret: PropTypes.array.isRequired,
        isActiveGame: PropTypes.bool.isRequired,
        isThereWinner: PropTypes.bool.isRequired,
    }),
};

export default connect(mapStateToProps, mapDispatchtoProps)(Gameover);