import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Secretinput(props) {
    const { handleClick, tap_codemakersecret, isOneplayer, Secret, beginGame } = props;

    const returnClosebutton = (Secretlength) => {
        if (Secret.length === 4) {
            return <span className="Close" onClick={() => { handleClick("TOGGLE_CASE_FORMSETUPSECRET"); beginGame(); }} >Tap here to continue</span>
        }
        else {
            return <span className="Close" onClick={() => handleClick("TOGGLE_CASE_FORMSETUPSECRET")} >Close ({4 - Secretlength} left)</span>
        }
    }
    const returnSecretdisplay = () => {
        const colors = (!isOneplayer) ? [
            ((Secret.length > 0) ? Secret[0] : ""),
            ((Secret.length > 1) ? Secret[1] : ""),
            ((Secret.length > 2) ? Secret[2] : ""),
            ((Secret.length > 3) ? Secret[3] : "")
        ] : ["white", "white", "white", "white"]

        return <div className="Secretcode">
            <div className="Socket"><div className={"ball " + colors[0]}></div></div>
            <div className="Socket"><div className={"ball " + colors[1]}></div></div>
            <div className="Socket"><div className={"ball " + colors[2]}></div></div>
            <div className="Socket"><div className={"ball " + colors[3]}></div></div>
        </div>
    }

    return (
        <div className="Secretcodesetup">
            <div className="row centered">
                {returnSecretdisplay()}
            </div>
            <div className="row centered">
                <span className="margin0">{isOneplayer ? "You will play as codebreaker. are you ready?" : "[Player 2] Create the code pattern."}</span>
            </div>
            <div className="row centered">
                <div className="Secretcode">
                    <div className="Socket"><div className="ball red" onClick={() => tap_codemakersecret("red")}></div></div>
                    <div className="Socket"><div className="ball blue" onClick={() => tap_codemakersecret("blue")}></div></div>
                    <div className="Socket"><div className="ball green" onClick={() => tap_codemakersecret("green")}></div></div>
                    <div className="Socket"><div className="ball yellow" onClick={() => tap_codemakersecret("yellow")}></div></div>
                    <div className="Socket"><div className="ball white" onClick={() => tap_codemakersecret("white")}></div></div>
                    <div className="Socket"><div className="ball black" onClick={() => tap_codemakersecret("black")}></div></div>
                </div>
            </div>
            {returnClosebutton(Secret.length)}
        </div>
    );
}

Secretinput.propTypes = {
    isOneplayer: PropTypes.bool.isRequired,
    handleClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
    tap_codemakersecret: color => dispatch({ type: 'tap_codemakersecret', color: color }),
    tap_codebreakerchecked: color => dispatch({ type: 'tap_codebreakerchecked', color: color }),
    beginGame: actionstate => dispatch({ type: 'UPDATE', actionstate: { Turn: 0 } }),
});


const mapStateToProps = (state) => {
    const { isOneplayer, Secret } = state.mastermind;
    return {
        isOneplayer,
        Secret
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Secretinput);
