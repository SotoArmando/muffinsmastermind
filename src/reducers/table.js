const initialState = [{
    Codemakerformtoggled: false,
    Codebreakerformtoggled: false,
    CodemakerTarget: 0,
    CodebreakerTarget: 0,
    isPlayer1turn: true,
    Turn: -1,
    Checked: [],
    Secret: [],
}]

const Table = (state = initialState, action) => {
    const { table, type } = action;
    switch (type) {
        case 'PUSH_TABLE':
            const newstate = { ...table };
            return [...state, newstate];
        case 'POP_TABLE':
            return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
        default:
            return state;
    }
};

export default Table;
