import React from 'react';


function Ansform(props) {
    const { toggleCodebreaker } = props;
    const asktimes = 10;
    const active = 0;


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


export default Ansform;