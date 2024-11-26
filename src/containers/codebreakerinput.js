import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function Codebreakerinput(props) {
    const { handleClick, tap_codebreakerchecked } = props;

    return (
        <div className="Ansform">
            <span className="Close" onClick={() => handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT")}>Close</span>
            <div className="option"><div onClick={() => { tap_codebreakerchecked("red"); handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT") }} className="ball red"></div></div>
            <div className="option"><div onClick={() => { tap_codebreakerchecked("blue"); handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT") }} className="ball blue"></div></div>
            <div className="option"><div onClick={() => { tap_codebreakerchecked("green"); handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT") }} className="ball green"></div></div>
            <div className="option"><div onClick={() => { tap_codebreakerchecked("yellow"); handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT") }} className="ball yellow"></div></div>
            <div className="option"><div onClick={() => { tap_codebreakerchecked("black"); handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT") }} className="ball black"></div></div>
            <div className="option"><div onClick={() => { tap_codebreakerchecked("white"); handleClick("TOGGLE_CASE_FORMCODEBREAKERINPUT") }} className="ball white"></div></div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    tap_codebreakerchecked: color => dispatch({ type: 'tap_codebreakerchecked', color: color }),
});

Codebreakerinput.propTypes = {
    handleClick: PropTypes.func.isRequired,
    tap_codebreakerchecked: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Codebreakerinput);
