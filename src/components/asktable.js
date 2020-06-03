import React from 'react';


function Asktable(props) {

    const { toggleCodebreaker, CodebreakerHist, Codebreakerchecked, isPlayerready, inactive, roll, turn } = props;

    const focus = Math.floor(turn / 2);
    const active = (turn % 2) === 0;
    const asktimes = 10;

    const returnKey = (index) => {
        return "Asktable" + Date().toLocaleString() + index
    }
    const returnasktimesKey = (index) => {
        return "Asktableasktimes" + Date().toLocaleString() + index
    }

    const returnSocket = (e, i, focused) => {
        const key = (4 * i) + e;

        const className = (focused) ?
            `Socket n${key} ${Codebreakerchecked[e] ? Codebreakerchecked[e] : ""}` :
            `Socket n${key} ${CodebreakerHist[i] ? CodebreakerHist[i][e] : ""}`;

        const _onClick = (!inactive && i === focus) ? () => toggleCodebreaker(key) : () => { };

        return <div key={returnKey(key)} onClick={_onClick} className={className}></div>
    }
    return (
        <div className={"Asktable f" + focus}>
            {new Array(asktimes).fill(true).map((e, i) =>
                <div key={returnasktimesKey(i)} className={"Ask " + ((i === focus && active) ? "active" : "")}>
                    {[0, 1, 2, 3].map(e => returnSocket(e, i, i === focus && active))}
                </div>)
            }

        </div>
    );

}


export default Asktable;