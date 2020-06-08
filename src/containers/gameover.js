import React from 'react'
import { connect } from 'react-redux';

function Gameover(props) {
    
    const { pushTable, handleClick, rollTurns, resetGame, isThereWinner, state } = props;
    const { Codebreakerchecked, Codemakerchecked, Turn } = state;
    const isPlayer1turn = Turn % 2 === 0;
    return (
        <div className="col">
            <div className={"Winner" + ((isThereWinner) ? ' active' : '')}>
                <span className="head1">We got a winner</span>
                <div className="col">
                    <span>Congrats to the Codebreaker/Codemaker</span>
                    <span>You got your code persist 10 round/ You discovered the code in #rounds</span>
                    <span>CONGRATS!</span>
                </div>
                <div className="row centered">
                    <span className="span0 border0 useraction margin1" onClick={() => { handleClick("TOGGLE_CASE_GAMEWIN"); resetGame(); }}>Play Again</span>
                </div>
                <span className="Close" onClick={() => handleClick("TOGGLE_CASE_GAMEWIN")}>Close</span>
            </div>
            <div className={"isPlayerready " + ((Codebreakerchecked.filter(e => e != "").length === 4 || (!isPlayer1turn && Codemakerchecked.filter(e => e != "").length > 0)) ? "active" : "")} onClick={() => { rollTurns(Turn + 1); pushTable(state); }}>
                <span>Done?</span>
                <span className="status">Tap here to continue</span>
            </div>
        </div >

    );
}

const mapStateToProps = (state) => ({
    state: { ...state.mastermind }
});

const mapDispatchtoProps = (dispatch) => ({
    pushTable: target => dispatch({ type: "PUSH_TABLE", table: target }),
    updateTarget: target => dispatch({ type: 'UPDATE', actionstate: { CodebreakerTarget: target } }),
    resetGame: () => dispatch({
        type: 'UPDATE', actionstate: {
            CodemakerHist: [],
            CodebreakerHist: [],
            Codemakerformtoggled: false,
            Codebreakerformtoggled: false,
            CodemakerTarget: 0,
            CodebreakerTarget: 0,
            isPlayer1turn: true,
            isOneplayer: false,
            Turn: -1,
            Codebreakerchecked: ["", "", "", ""],
            Codemakerchecked: ["", "", "", ""],
            Secret: [],
            Players: -1,
        }
    }),
    rollTurns: turn => dispatch({ type: ((turn - 1) % 2 === 0) ? "endCodebreakerTurn" : "endCodemakerTurn", actionstate: { Turn: turn } }),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Gameover);