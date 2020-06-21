import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Codemakerdisplay from './codemakerdisplay';
import Prompter from '../components/prompter';
import Bottomnavigationbar from '../components/bottomnavigationbar';
import operator from '../logic/operator';
import Codebreakerdisplay from './codebreakerdisplay';


function Display(props) {
    const {
        isActiveGame,
        isThereWinner,
        isPlayer1Turn,
        handleClick,
        Turn } = props;

    return <div className="Table">
            <Prompter isThereWinner={isThereWinner} handleClick={handleClick} />

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
            <div className="col centered">
                <div className={"row centered shorten1024 after0 " + (isActiveGame ? "" : "inactive")}>
                    <Codebreakerdisplay isActiveGame={isActiveGame} turn={Turn} handleClick={handleClick} />
                </div>
                <div className={"row centered shorten1024 " + (isActiveGame ? "" : "inactive")}>
                    <Codemakerdisplay isActiveGame={isActiveGame} turn={Turn} handleClick={handleClick} />
                </div>
            </div>
            <Bottomnavigationbar handleClick={handleClick} />
        </div>
    ;
}

const mapStateToProps = (state) => {
    const { Turn, Secret, CodebreakerHist } = state.mastermind;
    return {
        isActiveGame: (Turn >= 0),
        isThereWinner: ((CodebreakerHist.length === 0) ? false : (CodebreakerHist[CodebreakerHist.length - 1].join("") === Secret.join(""))),
        isPlayer1Turn: (Turn % 2 === 0),
        Turn,
        handleClick: operator,
    }

};

Display.propTypes = {
    isActiveGame: PropTypes.bool.isRequired,
    isThereWinner: PropTypes.bool.isRequired,
    isPlayer1Turn: PropTypes.bool.isRequired,
    Turn: PropTypes.number.isRequired,
    handleClick: PropTypes.func.isRequired,
};



export default connect(mapStateToProps)(Display);

