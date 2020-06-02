import React from 'react';
import Askform from '../components/askform';
import Ansform from '../components/ansform';
import Setupform from '../components/setupform';


function Formtable(props) {
    const { toggleCodemaker, toggleCodebreaker, toggleSetupform } = props;

    return (
        <div className="Formtable">
            <Askform toggleCodemaker={toggleCodemaker} />
            <Ansform toggleCodebreaker={toggleCodebreaker} />
            <Setupform toggleSetupform={toggleSetupform} />

            <div className="col col0" onClick={() => toggleSetupform()}>
                <span>Ready?</span>
                <span className="status">Tap here to Start</span>
            </div>
            <div className="col col0">
                <span>PRESS START</span>
        
            </div>
        </div>
    );
}


export default Formtable;