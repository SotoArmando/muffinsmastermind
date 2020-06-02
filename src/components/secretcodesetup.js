import React from 'react';


function Secretcodesetup(props) {
    const { beginGame, toggleSecretform, pushSecret, secret } = props;
    const asktimes = 10;
    const active = 0;
    const secretlength = secret.length;
    debugger;
    const returnClosebutton = (secretlength) => {
        if (secretlength === 4) {
            return <span className="Close" onClick={() => { toggleSecretform();beginGame(); }} >Tap here to continue</span>
        }
        else {
            return <span className="Close" onClick={() => toggleSecretform()} >Close ({4 - secretlength} left)</span>
        }
    }

    return (
        <div className="Secretcodesetup">
            <div className="row centered">
                <div className="Secretcode">
                    <div className="Socket"><div className={"ball " + ((secretlength > 0) ? secret[0] : "")}></div></div>
                    <div className="Socket"><div className={"ball " + ((secretlength > 1) ? secret[1] : "")}></div></div>
                    <div className="Socket"><div className={"ball " + ((secretlength > 2) ? secret[2] : "")}></div></div>
                    <div className="Socket"><div className={"ball " + ((secretlength > 3) ? secret[3] : "")}></div></div>
                </div>
            </div>
            <div className="row centered">
                <span className="margin0">Type your code!</span>
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


export default Secretcodesetup;