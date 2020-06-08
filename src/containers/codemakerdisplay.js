import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Codemakerdisplay(props) {
    const { CodemakerHist, Codemakerchecked, isActiveGame, handleClick, turn, updateTarget } = props;
    const asktimes = 10;
    const focus = Math.floor(turn / 2);
    const active = (turn % 2) === 1;
    

    const returnasktimesKey = (index) => {
        return "Askstatusasktimes" + Date().toLocaleString() + index
    }

    const returnSocket = (e, i, focused) => {
        
        const key = (4 * i) + e;
        const className = (focused) ?
            `Socket n${key} ${Codemakerchecked[e] ? Codemakerchecked[e] : ""}` :
            `Socket n${key} ${CodemakerHist[i] ? CodemakerHist[i][e] : ""}`;

        const _onClick = (isActiveGame && i === focus) ? () => { handleClick("TOGGLE_CASE_FORMCODEMAKERINPUT"); updateTarget(key) } : () => { };

        return <div key={key} onClick={_onClick} className={className}></div>
    }

    return (
        <div className={"Askstatus f" + focus}>
            {new Array(asktimes).fill(true).map((e, i) =>
                <div key={returnasktimesKey(i)} className={"Ask " + ((i === focus && active) ? "active" : "")}>
                    {[0, 1, 2, 3].map(e => returnSocket(e, i, i === focus && active))}
                </div>)
            }

        </div>
    );
}

// Codemakerdisplay.propTypes = {
//     Codemakerchecked: PropTypes.func.isRequired,
//     CodemakerHist: PropTypes.array.isRequired,
//     toggleCodemaker: PropTypes.func.isRequired,
//     inactive: PropTypes.bool.isRequired,
//     turn: PropTypes.bool.isRequired,
// };

const mapStateToProps = (state) => {
    const { CodemakerHist, Codemakerchecked } = state.mastermind;
    return {
        CodemakerHist,
        Codemakerchecked
    }
};
const mapDispatchtoProps = (dispatch) => ({
    updateTarget: target => dispatch({ type: 'UPDATE', actionstate: { CodemakerTarget: target } }),
});

export default connect(mapStateToProps, mapDispatchtoProps)(Codemakerdisplay);

