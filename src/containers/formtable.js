import React from 'react';
import Askform from '../components/askform';
import Ansform from '../components/ansform';
import Setupform from '../components/setupform';
import Secretcodesetup from '../components/secretcodesetup';


function Formtable(props) {
    const { toggleCodemaker,
        beginGame,
        toggleCodebreaker,
        toggleSetupform,
        toggleSecretform,
        pushSecret,
        isPlayer1turn,
        secret } = props;

    const secretlength = secret.length;

    const returnStatus = (length) => {
        if (length === 4) {
            return (
                <div className="col col0" onClick={() => toggleSetupform()}>
                    <span>Game Ready</span>
                    <span className="status">Go ahead and play :D</span>
                </div>
            )
        } else {
            return (
                <div className="col col0" onClick={() => toggleSetupform()}>
                    <span>Are you ready?</span>
                    <span className="status">Tap here to Start</span>
                </div>
            )
        }

    }

    return (
        <div className="Formtable">
            <Askform toggleCodemaker={toggleCodemaker} />
            <Ansform toggleCodebreaker={toggleCodebreaker} />
            <Setupform toggleSetupform={toggleSetupform} toggleSecretform={toggleSecretform} />
            <Secretcodesetup beginGame={beginGame} toggleSecretform={toggleSecretform} pushSecret={pushSecret} secret={secret} />

            {returnStatus(secretlength)}
            <div className="row row0 centered">
                <div className={"col playerlabel "+((!isPlayer1turn)?"active":"")}>
                    <span className="">Codemaker</span>
                </div>
                <div className={"col playerlabel "+((isPlayer1turn)?"active":"")}>
                    <span className="">Codebreaker</span>
                </div>
            </div>
        </div>
    );
}


export default Formtable;