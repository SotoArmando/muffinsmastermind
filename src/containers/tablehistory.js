import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Tablehistory(props) {
    const { table, toggleHistory } = props;
    let isTurn = true;


    const returnMsg = ({ Codemakerformtoggled,
        Codebreakerformtoggled,
        CodemakerTarget,
        CodebreakerTarget,
        isPlayer1turn,
        Turn,
        Checked,
        Secret }) => {

        if (Turn === -1) {
            if (Secret.length === 0) {
                return `Welcome :D here will appear all plays you make`
            } else {
                return <span><span className="a">Player {(Turn % 2 == 0) ? "1" : "2"}</span> has tapped his secretcode color #{Secret.length}</span>
            }

        } else {
            if (Checked === 0) {
                if (Codebreakerformtoggled || Codemakerformtoggled) {
                    return (Turn % 2 == 0) ? `Codemaker(Player 1) opened his Colors form` : `Codebreaker(Player 2) opened his Colors form`
                }

            } else {
                return <span><span className="a">Player {(Turn % 2 == 0) ? "1" : "2"}</span> has choosen color #{Checked.length} - {Checked[Checked.length-1]}</span>
            }

        }
    }
    const returnHistory = (table) => {
        return table.map(e => {
            return <span className="useraction">{returnMsg(e)}</span>
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