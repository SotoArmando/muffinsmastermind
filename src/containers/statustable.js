import React from 'react';


function Statustable(props) {
    const { toggleHistory } = props;
    const asktimes = 10;
    const active = 0;
    
    

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


export default Statustable;