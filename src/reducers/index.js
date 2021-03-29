const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
  }
};

export default reducer;
