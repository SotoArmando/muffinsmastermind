import React from 'react';
import Askform from '../components/askform';
import Ansform from '../components/ansform';


function Formtable(props) {
    const { toggleCodemaker, toggleCodebreaker } = props;

    return (
        <div className="Formtable">
            <Askform toggleCodemaker={toggleCodemaker} />
            <Ansform toggleCodebreaker={toggleCodebreaker} />

            <div className="col col0">
                <span>Ready to Begin</span>
                <span className="status">Tap here to START</span>
            </div>
            <div className="col col0">
                <span>PRESS START</span>
        
            </div>
        </div>
    );
}


export default Formtable;