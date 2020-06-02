
const book = (state = initialState, action) => {
  const { book, type } = action;
  switch (type) {
    case 'CREATE_BOOK':
      book.id = Math.random() + Date().toString();
      return [...state, book];
    case 'REMOVE_BOOK':
      return [...state.slice(0, action.index), ...state.slice(action.index + 1)];
    case 'UPDATE_BOOK':
      return [...state.slice(0, action.index), book, ...state.slice(action.index + 1)];
    default:
      return state;
  }
};


export default book;