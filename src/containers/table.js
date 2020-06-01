import React from 'react';
import Asktable from '../components/asktable';
import Askstatus from '../components/askstatus';
import Formtable from './formtable';
import Statustable from './statustable';


function Table() {
    return (
        <div className="Table">
            <Formtable />
            <Statustable />
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