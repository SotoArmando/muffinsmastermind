import React from 'react';
import PropTypes from 'prop-types';

function Setupform(props) {
    const { toggleSetupform } = props;


    return (
        <div className="Setupform">
            <span className="Close" onClick={() => toggleSetupform()}>Close</span>
            <span> Are you the Cokemaker or the Codebreaker?</span>
            <div className="row centered">
                <span className="option">Codemaker</span>
                <span className="option">Codebreaker</span>
            </div>
        </div>
    );
}


export default Setupform;