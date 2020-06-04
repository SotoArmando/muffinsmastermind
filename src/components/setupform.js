import React from 'react';
import tablelogic from '../logic/table';
import PropTypes from 'prop-types';

function Setupform(props) {
    const { pushSecret, setisOneplayer, toggleQuestions, toggleSetupform, toggleSecretform } = props;
    const triggerPlayerOnemode = () => {
        toggleSetupform();
        toggleSecretform();
        const newrandomSecret = tablelogic().randomSecret();
        pushSecret(newrandomSecret);
    }

    return (
        <div className="Setupform">
            <span className="Close" onClick={() => toggleSetupform()}>Close</span>

            <div className="Playersquestion displayed active">
                <span className="margin0"> How many are going to play?</span>
                <div className="row centered">
                    <span className="option" onClick={() => { setisOneplayer(false); toggleQuestions(); }}>2 Players</span>
                    <span className="option" onClick={() => triggerPlayerOnemode() }>1 Player</span>
            </div>
        </div>

        <div className="Playerssecondquestion">
            <span className="margin0"> Are you the Cokemaker (Player 2) or the Codebreaker (Player 1)?</span>
            <div className="row centered">
                <span className="option" onClick={() => { toggleSetupform(); toggleSecretform(); toggleQuestions(); }}>Codemaker</span>
                <span className="option" onClick={() => { toggleSetupform(); toggleSecretform(); toggleQuestions(); }}>Codebreaker</span>
            </div>
        </div>

        </div >
    );
}

Setupform.propTypes = {
    pushSecret: PropTypes.func.isRequired,
    setisOneplayer: PropTypes.func.array.isRequired,
    toggleQuestions: PropTypes.func.isRequired,
    toggleSetupform: PropTypes.func.bool.isRequired,
    toggleSecretform: PropTypes.func.isRequired,
};

export default Setupform;