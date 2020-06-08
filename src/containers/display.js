import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Codemakerdisplay from './codemakerdisplay';
import Prompter from '../components/prompter';
import Bottomnavigationbar from '../components/bottomnavigationbar';
import Player from '../logic/player';
import operator from '../logic/operator';
import Codebreakerdisplay from './codebreakerdisplay';


function Display(props) {
    const {
        isActiveGame,
        isThereWinner,
        isPlayer1Turn,
        Turn } = props;
    
    
    
    const handleClick = (type) => {
        
        operator(type);
    }

    return (
        <div className="Table">
            <Prompter isThereWinner={isThereWinner} isActiveGame={isActiveGame} handleClick={handleClick} />

            <div className="row centered">
                <div className="col col0" >
                    <span>Are you ready?</span>
                    <span className="status" onClick={() => handleClick("TOGGLE_CASE_GAMESETUP")} >Tap here to Start</span>
                </div>

                <div className="row row0 centered hidden320">
                    <div className={"col playerlabel " + ((!isPlayer1Turn) ? "active" : "")}>
                        <span className="">Codemaker</span>
                    </div>
                    <div className={"col playerlabel " + ((isPlayer1Turn) ? "active" : "")}>
                        <span className="">Codebreaker</span>
                    </div>
                </div>
            </div>

            <div className={"row centered shorten1024 after0 " + (isActiveGame ? "" : "inactive")}>
                <Codebreakerdisplay isActiveGame={isActiveGame} turn={Turn} handleClick={handleClick} />
            </div>
            <div className={"row centered shorten1024 " + (isActiveGame ? "" : "inactive")}>
                <Codemakerdisplay isActiveGame={isActiveGame} turn={Turn} handleClick={handleClick} />
            </div>

            <Bottomnavigationbar handleClick={handleClick} />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { Turn, Secret, Codebreakerchecked, CodebreakerHist } = state.mastermind;

    
    return {
        isActiveGame: (Turn >= 0),
        isThereWinner: ((CodebreakerHist.length === 0) ? false : (CodebreakerHist[CodebreakerHist.length - 1].join("") === Secret.join(""))),
        isPlayer1Turn: (Turn % 2 === 0),
        Turn,
    }

};

// Display.propTypes = {
//     CodemakerHist: PropTypes.array.isRequired,
//     CodebreakerHist: PropTypes.array.isRequired,
//     Codemakerformtoggled: PropTypes.bool.isRequired,
//     Codebreakerformtoggled: PropTypes.bool.isRequired,
//     CodemakerTarget: PropTypes.number.isRequired,
//     CodebreakerTarget: PropTypes.number.isRequired,
//     isPlayer1turn: PropTypes.bool.isRequired,
//     Turn: PropTypes.number.isRequired,
//     Codebreakerchecked: PropTypes.array.isRequired,
//     Codemakerchecked: PropTypes.array.isRequired,
//     Secret: PropTypes.array.isRequired,
//     isOneplayer: PropTypes.bool.isRequired,
//     PUSH_TABLE: PropTypes.func.isRequired,
// };



export default connect(mapStateToProps)(Display);

