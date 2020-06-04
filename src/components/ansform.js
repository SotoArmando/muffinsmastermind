import React from 'react';
import PropTypes from 'prop-types';

function Ansform(props) {
    const { toggleCodebreaker } = props;

    return (
        <div className="Ansform">
            <span className="Close" onClick={toggleCodebreaker}>Close</span>
            <div className="option"><div onClick={() => toggleCodebreaker(0, "red")} className="ball red"></div></div>
            <div className="option"><div onClick={() => toggleCodebreaker(0, "blue")} className="ball blue"></div></div>
            <div className="option"><div onClick={() => toggleCodebreaker(0, "green")} className="ball green"></div></div>
            <div className="option"><div onClick={() => toggleCodebreaker(0, "yellow")} className="ball yellow"></div></div>
            <div className="option"><div onClick={() => toggleCodebreaker(0, "black")} className="ball black"></div></div>
            <div className="option"><div onClick={() => toggleCodebreaker(0, "white")} className="ball white"></div></div>
        </div>
    );
}

Ansform.propTypes = {
    toggleCodebreaker: PropTypes.func.isRequired,
};

export default Ansform;