import React from 'react';
import PropTypes from 'prop-types';

function Bottomnavigationbar(props) {
    const { handleClick } = props;
    
    return (
        <div className="Statustable">
            <span className="status0 border0" onClick={() => handleClick("TOGGLE_CASE_GAMEHIST")}>History</span>
            <span className="status0 hidden1024">+ Mobile Friendly</span>
            <span className="status0 hidden1024">+ Redux</span>
            <span className="status0 hidden1024">+ Jest</span>
            <span className="status0">Follow instructions</span>            
        </div>
    );
}

Bottomnavigationbar.propTypes = {
    handleClick: PropTypes.func.isRequired,
};


export default Bottomnavigationbar;