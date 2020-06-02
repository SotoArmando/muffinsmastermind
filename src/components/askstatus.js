import React from 'react';


function Askstatus(props) {
    const { toggleCodemaker, isPlayerready, inactive, roll, turn } = props;
    const asktimes = 10;
    const focus = Math.floor(turn / 2);
    const active = (turn % 2) === 1;

    return (
        <div className={"Askstatus f" + focus}>
            {new Array(asktimes).fill(true).map((e, i) =>
                <div className={"Ask " + ((i === focus && active) ? "active" : "")}>
                    <div onClick={(!inactive && i === focus) ? () => toggleCodemaker((4 * i)) : ""} className={"Socket n" + (4 * i)}></div>
                    <div onClick={(!inactive && i === focus) ? () => toggleCodemaker((4 * i) + 1) : ""} className={"Socket n" + ((4 * i) + 1)}></div>
                    <div onClick={(!inactive && i === focus) ? () => toggleCodemaker((4 * i) + 2) : ""} className={"Socket n" + ((4 * i) + 2)}></div>
                    <div onClick={(!inactive && i === focus) ? () => toggleCodemaker((4 * i) + 3) : ""} className={"Socket n" + ((4 * i) + 3)}></div>
                </div>)
            }
 
        </div>
    );
}


export default Askstatus;