import React from 'react';
import tablelogic from '../logic/table';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Setup(props) {
    const { handleClick, updateSecret, updateGamemode } = props;
    const triggerPlayerOnemode = () => {
        handleClick("TOGGLE_CASE_GAMESETUP");
        handleClick("TOGGLE_CASE_FORMSETUPSECRET");
        const randomSecret = tablelogic().randomSecret();
        updateSecret(randomSecret);
    }

    return (
        <div className="Setupform">
            <span className="Close" onClick={() => handleClick("TOGGLE_CASE_GAMESETUP")}>Close</span>
            <div className="Playersquestion displayed active">
                <span className="margin0"> How many are going to play?</span>
                <div className="row centered">
                    <span className="option" onClick={() => { updateGamemode(false); handleClick("TOGGLE_CASE_GAMESETUPQUESTIONS"); }}>2 Players</span>
                    <span className="option" onClick={() => { triggerPlayerOnemode() }}>1 Player</span>
                </div>
            </div>

            <div className="Playerssecondquestion">
                <span className="margin0"> Are you the Cokemaker (Player 2) or the Codebreaker (Player 1)?</span>
                <div className="row centered">
                    <span className="option" onClick={() => { handleClick("TOGGLE_CASE_GAMESETUP"); handleClick("TOGGLE_CASE_FORMSETUPSECRET"); }}>Codemaker</span>
                    <span className="option" onClick={() => { handleClick("TOGGLE_CASE_GAMESETUP"); handleClick("TOGGLE_CASE_FORMSETUPSECRET"); }}>Codebreaker</span>
                </div>
            </div>

        </div >
    );
}

const mapDispatchToProps = dispatch => ({
    updateSecret: secret => dispatch({ type: 'UPDATE', actionstate: { Secret: secret } }),
    updateGamemode: playermode => dispatch({ type: 'UPDATE', actionstate: { isOneplayer: playermode } }),
});

Setup.propTypes = {
    handleClick: PropTypes.func.isRequired,
    updateSecret: PropTypes.func.isRequired,
    updateGamemode: PropTypes.func.isRequired
};

export default connect(null, mapDispatchToProps)(Setup);