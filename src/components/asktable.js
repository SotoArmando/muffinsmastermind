import React from 'react';


function Asktable(props) {

    const { toggleCodebreaker, isPlayerready, roll, turn } = props;
    // window.alert("isPlayerready "+isPlayerready)
    const focus = Math.floor(turn / 2);
    const active = (turn % 2) === 0;
    const asktimes = 10;



    return (
        <div className={"Asktable f" + focus}>
            {new Array(asktimes).fill(true).map(e => 1).map((e, i) =>
                <div className={"Ask " + ((i === focus && active) ? "active" : "")}>
                    <div onClick={() => toggleCodebreaker((4 * i))} className={"Socket n" + (4 * i)}></div>
                    <div onClick={() => toggleCodebreaker((4 * i) + 1)} className={"Socket n" + ((4 * i) + 1)}></div>
                    <div onClick={() => toggleCodebreaker((4 * i) + 2)} className={"Socket n" + ((4 * i) + 2)}></div>
                    <div onClick={() => toggleCodebreaker((4 * i) + 3)} className={"Socket n" + ((4 * i) + 3)}></div>
                </div>)
            }
            <div className={"isPlayerready " + ((isPlayerready) ? "active" : "")} onClick={() => roll()} >
                <span>Ready</span>
                <span className="status">Tap here to continue</span>
            </div>
        </div>
    );

}


export default Asktable;