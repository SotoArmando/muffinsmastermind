import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import uniqid from 'uniqid'

function History(props) {
    const { handleClick, mastermindhistory } = props;
    return <div className="Tablehistory" onClick={() => handleClick("TOGGLE_CASE_GAMEHIST")}>
        {mastermindhistory.map((e, i) =>
            <pre className="historyline" key={e, i}>

                {(e.Turn % 2 === 1) ?
                    <div   className="line">
                        <span>Codemaker (Player 2) played</span>
                        <div className="row centered">{e.Codemakerchecked.map(e => <div key={uniqid()} className={"ball mini " + e}></div>)}</div>
                    </div> :
                    <div  className="line">
                        <span>Codebreaker (Player 1) played</span>
                        <div className="row centered">{e.Codebreakerchecked.map(e => {
                            return <div key={uniqid()} className={"ball mini " + e}></div>
                        })}</div>
                    </div>}

            </pre>)}
    </div>
}

const mapStateToProps = (state) => {
    return { mastermindhistory: state.mastermindhistory }
};

History.propTypes = {
    handleClick: PropTypes.func.isRequired,
    mastermindhistory: PropTypes.array.isRequired,
};

export default connect(mapStateToProps)(History);