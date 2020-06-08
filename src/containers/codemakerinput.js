import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Codemakerinput(props) {
    const { handleClick, tap_codemakerchecked } = props;

    return (
        <div className="Askform">
            <span className="Close" onClick={() => handleClick("TOGGLE_CASE_FORMCODEMAKERINPUT")}>Close</span>
            <div className="option"><div onClick={() => { tap_codemakerchecked("white"); handleClick("TOGGLE_CASE_FORMCODEMAKERINPUT") }} className="ball white"></div></div>
            <div className="option"><div onClick={() => { tap_codemakerchecked("red"); handleClick("TOGGLE_CASE_FORMCODEMAKERINPUT") }} className="ball red"></div></div>
        </div>
    );
}


const mapDispatchToProps = dispatch => ({
    tap_codemakerchecked: color => dispatch({ type: 'tap_codemakerchecked', color: color }),
});

Codemakerinput.propTypes = {
    handleClick: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Codemakerinput);