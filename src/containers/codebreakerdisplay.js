import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uniqid from 'uniqid'
function Codebreakerdisplay(props) {

    const { CodebreakerHist, Codebreakerchecked, isActiveGame, handleClick, Turn, updateTarget } = props;
    const focus = Math.floor(Turn / 2);
    const active = (Turn % 2) === 0;
    const asktimes = 10;

    const returnSocket = (e, i, focused) => {
        const key = (4 * i) + e;
        const className = (focused) ?
            `Socket n${key} ${Codebreakerchecked[e] ? Codebreakerchecked[e] : ""}` :
            `Socket n${key} ${CodebreakerHist[i] ? CodebreakerHist[i][e] : ""}`;

        const _onClick = (isActiveGame && i === focus) ? () => { handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT"); updateTarget(key) } : () => { };

        return <div key={uniqid()} onClick={_onClick} className={className}></div>
    }

    return (
        <div className={"Asktable f" + focus}>
            {new Array(asktimes).fill(true).map((e, i) =>
                <div key={uniqid()} className={"Ask " + ((i === focus && active) ? "active" : "")}>
                    {[0, 1, 2, 3].map(e => returnSocket(e, i, i === focus && active))}
                </div>)
            }

        </div>
    );
}


Codebreakerdisplay.propTypes = {
    CodebreakerHist: PropTypes.array.isRequired,
    Codebreakerchecked: PropTypes.array.isRequired,
    isActiveGame: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
    updateTarget: PropTypes.func.isRequired,
    Turn: PropTypes.number.isRequired
};

const mapDispatchtoProps = (dispatch) => ({
    updateTarget: target => dispatch({ type: 'UPDATE', actionstate: { CodebreakerTarget: target } }),
});

const mapStateToProps = (state) => ({
    Codebreakerchecked: state.mastermind.Codebreakerchecked,
    CodebreakerHist: state.mastermind.CodebreakerHist,
    Turn: state.mastermind.Turn,
});

export default connect(mapStateToProps, mapDispatchtoProps)(Codebreakerdisplay);
