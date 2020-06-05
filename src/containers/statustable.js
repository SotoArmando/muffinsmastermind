import React from 'react';
import PropTypes from 'prop-types';

function Statustable(props) {
    const { toggleHistory } = props;
    
    return (
        <div className="Statustable">
            <span className="status0 border0" onClick={() => toggleHistory()}>History</span>
            <span className="status0 hidden1024">+ Mobile Friendly</span>
            <span className="status0 hidden1024">+ Redux</span>
            <span className="status0 hidden1024">+ Jest</span>
            <span className="status0">Follow instructions</span>            
        </div>
    );
}

Statustable.propTypes = {
    toggleHistory: PropTypes.func.isRequired,
};


export default Statustable;