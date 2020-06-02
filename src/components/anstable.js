import React from 'react';


function Anstable() {
    const { } = props;
    const asktimes = 10;
    const active = 0;


    return (
        <div className="Answertable">
            {new Array(asktimes).fill(true).map(e => 1).map((e,i) => 
                <div className={"Ask "+((i == active) ? "active" : "")}>
                    <div className="Socket"></div>
                    <div className="Socket"></div>
                    <div className="Socket"></div>
                    <div className="Socket"></div>
                </div>)
            }
        </div>
    );
}


export default Anstable;