import React from 'react';
import Codebreakerinput from '../containers/codebreakerinput';
import Codemakerinput from '../containers/codemakerinput';
import Setup from '../containers/setup';
import Secretinput from '../containers/secretinput';
import PropTypes from 'prop-types';
import History from '../containers/history'
import Gameover from '../containers/gameover'

function Prompter(props) {
    const { handleClick, isThereWinner } = props;

    return (
        <div className="Formtable">
            <Codebreakerinput handleClick={handleClick} />
            <Codemakerinput handleClick={handleClick} />
            <Setup handleClick={handleClick} />
            <Secretinput handleClick={handleClick} />
            <History handleClick={handleClick} />
            <Gameover handleClick={handleClick} isThereWinner={isThereWinner} />
        </div>
    );
}

Prompter.propTypes = {
    handleClick: PropTypes.func.isRequired,
    isThereWinner: PropTypes.bool.isRequired,
};

export default Prompter;