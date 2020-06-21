import { combineReducers } from 'redux';
import { mastermindhistory, mastermind } from './mastermind';


const rootReducer = combineReducers({
    mastermindhistory,
    mastermind
});


export default rootReducer;