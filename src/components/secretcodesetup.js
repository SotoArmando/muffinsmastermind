import React from 'react';
import PropTypes from 'prop-types';

function Secretcodesetup(props) {
    const { isOneplayer, beginGame, toggleSecretform, pushSecret, secret } = props;
    const secretlength = secret.length;

    const returnClosebutton = (secretlength) => {
        if (secretlength === 4) {
            return <span className="Close" onClick={() => { toggleSecretform(); beginGame(); }} >Tap here to continue</span>
        }
        else {
            return <span className="Close" onClick={() => toggleSecretform()} >Close ({4 - secretlength} left)</span>
        }
    }
    const returnSecretdisplay = () => {
        const colors = (!isOneplayer) ? [
            ((secretlength > 0) ? secret[0] : ""),
            ((secretlength > 1) ? secret[1] : ""),
            ((secretlength > 2) ? secret[2] : ""),
            ((secretlength > 3) ? secret[3] : "")
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
                    <div className="Socket"><div className="ball red" onClick={() => pushSecret("red")}></div></div>
                    <div className="Socket"><div className="ball blue" onClick={() => pushSecret("blue")}></div></div>
                    <div className="Socket"><div className="ball green" onClick={() => pushSecret("green")}></div></div>
                    <div className="Socket"><div className="ball yellow" onClick={() => pushSecret("yellow")}></div></div>
                    <div className="Socket"><div className="ball white" onClick={() => pushSecret("white")}></div></div>
                    <div className="Socket"><div className="ball black" onClick={() => pushSecret("black")}></div></div>
                </div>
            </div>
            {returnClosebutton(secretlength)}
        </div>
    );
}

Secretcodesetup.propTypes = {
    isOneplayer: PropTypes.bool.isRequired,
    beginGame: PropTypes.func.array.isRequired,
    toggleSecretform: PropTypes.func.isRequired,
    pushSecret: PropTypes.func.bool.isRequired,
    secret: PropTypes.arr.isRequired,
};

export default Secretcodesetup;