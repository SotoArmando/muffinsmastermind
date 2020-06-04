import React from 'react';
import PropTypes from 'prop-types';


function Askform(props) {
    const { toggleCodemaker } = props;


    return (
        <div className="Askform">
            <span className="Close" onClick={() => toggleCodemaker()}>Close</span>
            <div className="option"><div onClick={() => toggleCodemaker(0,"white")} className="ball white"></div></div>
            <div className="option"><div onClick={() => toggleCodemaker(0,"red")} className="ball red"></div></div>

        </div>
    );
}

Askform.propTypes = {
    toggleCodemaker: PropTypes.func.isRequired,
};

export default Askform;