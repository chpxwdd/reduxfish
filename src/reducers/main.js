import {
  ACTION_CHANGE_FIRST_NAME,
  ACTION_CHANGE_SECOND_NAME
} from "../constants/main";

const initialState = {
  firstName: "initial firstName",
  secondName: "initial secondName"
};

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_CHANGE_FIRST_NAME:
      return { ...state, firstName: action.payload };
    case ACTION_CHANGE_SECOND_NAME:
      return { ...state, secondName: action.payload };
    default:
      return state;
  }
};
