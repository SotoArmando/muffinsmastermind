import React from 'react';
import Asktable from '../components/asktable';
import Askstatus from '../components/askstatus';


function Table() {
    return (
        <div className="Table">
            <div className="row centered">
                <Asktable />
            </div>
            <div className="row centered">
                <Askstatus />
            </div>
            
        </div>
    );

}


export default Table;