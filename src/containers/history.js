import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function History(props) {
    const { handleClick, mastermindhistory } = props;
    return <div className="Tablehistory" onClick={() => handleClick("TOGGLE_CASE_GAMEHIST")}>
        { mastermindhistory.map((e,i) => 
        <pre key={e,i}>
            {JSON.stringify(mastermindhistory, undefined, 4)}
        </pre>)}
    </div>
}


const mapStateToProps = (state) => {
    return { mastermindhistory: state.mastermindhistory }
};


History.propTypes = {
    handleClick: PropTypes.func.isRequired,
    mastermindhistory: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(History);