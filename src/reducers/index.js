import { SET_FAVORITE, DELETE_FAVORITE } from '../actions/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_FAVORITE:
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
  }
};

export default reducer;
