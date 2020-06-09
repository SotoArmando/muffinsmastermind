import Table from '../logic/table'

const mastermindhistoryinitialState = []
const mastermindinitialState = {
    CodemakerHist: [],
    CodebreakerHist: [],
    Codemakerformtoggled: false,
    Codebreakerformtoggled: false,
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    isOneplayer: true,
    Turn: -1,
    Codebreakerchecked: ["", "", "", ""],
    Codemakerchecked: ["", "", "", ""],
    Secret: [],
    Players: -1,
}
const table = Table();

const mastermindhistory = (state = mastermindhistoryinitialState, action) => {
    const { table, type } = action;
    switch (type) {
        case 'PUSH_TABLE': {
            const newstate = { ...table };
            return [...state, newstate];
        }
        case 'POP_TABLE': {
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        }
        default: {
            return state;
        }
    }
};


const mastermind = (state = mastermindinitialState, action) => {
    const { actionstate, color, type } = action;
    const { isOneplayer, Codebreakerchecked, CodebreakerHist, CodebreakerTarget, Codemakerchecked, CodemakerHist, CodemakerTarget, Secret } = state;

    switch (type) {
        case 'UPDATE': {
            return (state != actionstate) ? { ...state, ...actionstate } : { ...state }
        }
        case 'tap_codemakersecret': {
            return { ...state, Secret: [...Secret, color] }
        }
        case 'tap_codebreakerchecked': {
            const next = {
                Codebreakerchecked: [
                    ...Codebreakerchecked.slice(0, (CodebreakerTarget % 4)), color, ...Codebreakerchecked.slice((CodebreakerTarget % 4) + 1)]
            };
            return {
                ...state, ...next
            }
        }
        case 'tap_codemakerchecked': {
            return {
                ...state, Codemakerchecked: [...Codemakerchecked.slice(0, (CodemakerTarget % 4)), color, ...Codemakerchecked.slice((CodemakerTarget % 4) + 1)]
            }
        }
        case 'endCodebreakerTurn': {
            return {
                ...state, ...actionstate, CodebreakerHist: [...CodebreakerHist, Codebreakerchecked], Codebreakerchecked: ["", "", "", ""]
            }
        }
        case 'endCodemakerTurn': {
            const res = (isOneplayer) ? [...CodemakerHist, table.getCodemakerplay(CodebreakerHist[CodebreakerHist.length - 1], Secret)] : [...CodemakerHist, Codemakerchecked]
            return {
                ...state, ...actionstate, CodemakerHist: res, Codemakerchecked: ["", "", "", ""]
            }
        }
        default: {
            return state;
        }
    }
};

export { mastermindhistory, mastermind };
