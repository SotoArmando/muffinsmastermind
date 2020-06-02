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
        secret } = props;

    return (
        <div className="Formtable">
            <Askform toggleCodemaker={toggleCodemaker} />
            <Ansform toggleCodebreaker={toggleCodebreaker} />
            <Setupform toggleSetupform={toggleSetupform} toggleSecretform={toggleSecretform} />
            <Secretcodesetup beginGame={beginGame} toggleSecretform={toggleSecretform} pushSecret={pushSecret} secret={secret} />

            <div className="col col0" onClick={() => toggleSetupform()}>
                <span>Are you ready?</span>
                <span className="status">Tap here to Start</span>
            </div>
            <div className="col col0">
                <span></span>

            </div>
        </div>
    );
}


export default Formtable;