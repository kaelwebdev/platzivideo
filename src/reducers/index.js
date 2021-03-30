import {
  SET_FAVORITE, DELETE_FAVORITE, LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from '../actions/actionTypes';

const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
    case SET_FAVORITE: {
      const item = state.myList.find((items) => items.id === action.payload.id);
      if (item) return state;
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    }
    case DELETE_FAVORITE:
      return {
        ...state,
        myList: state.myList.filter((item) => item.id !== action.payload),
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        user: action.payload,
      };
  }
};

export default reducer;
