import React from 'react';
import PropTypes from 'prop-types';

function Setupform(props) {
    const { toggleSetupform, toggleSecretform } = props;


    return (
        <div className="Setupform">
            <span className="Close" onClick={() => toggleSetupform()}>Close</span>
            <span className="margin0"> Are you the Cokemaker or the Codebreaker?</span>
            <div className="row centered">
                <span className="option" onClick={() => { toggleSetupform(); toggleSecretform(); }}>Codemaker</span>
                <span className="option" onClick={() => { toggleSetupform(); toggleSecretform(); }}>Codebreaker</span>
            </div>
        </div>
    );
}


export default Setupform;