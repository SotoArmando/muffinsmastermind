import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Tablehistory(props) {
    const { table, toggleHistory } = props;

    const returnMsg = ({ 
        Turn,
        Codebreakerchecked,
        Codemakerchecked,
        Secret, }) => {

        if (Turn === -1) {
            if (Secret.length === 0) {
                return `Welcome :D here will appear all plays you make`
            } else {
                return <span><span className="a">Player {(Turn % 2 == 0) ? "1" : "2"}</span> has tapped his secretcode color #{Secret.length}</span>
            }

        } else {
   
            const colors = (Turn % 2 == 0) ? Codebreakerchecked : Codemakerchecked
            return <span><span className="a">Player {(Turn % 2 == 0) ? "1" : "2"}</span> has choosen colors {colors.join(" ")}</span>
            

        }
    }

    const returnKey = (index) => {
        return "Tablehistory" + Date().toLocaleString() + index
    }

    const returnHistory = (table) => {
        return table.map((e, i) => {
            return <span key={returnKey(i)} className="useraction">{returnMsg(e)}</span>
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
    toggleHistory: PropTypes.func.isRequired,
    table: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(Tablehistory);