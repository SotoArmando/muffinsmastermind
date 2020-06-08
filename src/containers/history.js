import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function History(props) {
    const { handleClick, mastermindhistory } = props;
    debugger;
    return <div className="Tablehistory" onClick={() => handleClick("TOGGLE_CASE_GAMEHIST")}>
        { mastermindhistory.map(e => 
        <pre>
            {JSON.stringify(mastermindhistory, undefined, 4)}
        </pre>)}
    </div>
}


const mapStateToProps = (state) => {
    debugger;
    return { mastermindhistory: state.mastermindhistory }
};


// History.propTypes = {
//     toggleHistory: PropTypes.func.isRequired,
//     table: PropTypes.array.isRequired,
// };

export default connect(mapStateToProps)(History);