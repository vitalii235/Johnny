import {UPDATE_ALL_TOYS} from './toys.types';
const initialState = {
  toys: [],
};

export const toysReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_ALL_TOYS: {
      return {...state, toys: action.payload};
    }
    default:
      return state;
  }
};
