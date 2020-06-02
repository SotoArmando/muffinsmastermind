import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Tablehistory(props) {
    const { table, toggleHistory } = props;
    let isTurn = true;


    const returnMsg = (Turn, Secret, Countchecked) => {
        if (Turn === -1) {
            if (Secret.length === 0) {
                return `Welcome :D here will appear all plays you make`
            } else {
                return `Player ${(Turn % 2 == 0) ? "1" : "2"} has tapped his secretcode color [${Countchecked}]`
            }
            
        } else {
            if (Countchecked === 0)
            {
                return `Now games is ready player 1 must choose his 4 colors`
            } else {
                return `Player ${(Turn % 2 == 0) ? "1" : "2"} has choosen color [${Countchecked}]`
            }
            
        }
    }
    const returnHistory = (table) => {

        return table.map(e => {
            const {
                Codemakerformtoggled,
                Codebreakerformtoggled,
                CodemakerTarget,
                CodebreakerTarget,
                isPlayer1turn,
                Turn,
                Countchecked,
                Secret
            } = e;
            return <span>{returnMsg(Turn,Secret,Countchecked)}</span>
        })
    }

    return <div className="Tablehistory" onClick={() => toggleHistory()}>
        {returnHistory(table)}
    </div>
}


const mapStateToProps = (store) => {
    return { table: store.table }
};


Tablehistory.propTypes = {
    toggleHistory: PropTypes.func.isRequired
};

export default connect(mapStateToProps)(Tablehistory);