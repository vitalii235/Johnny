import {TOYS_UPDATE_INPUT} from './inputs.types';
const initialState = {
  inputValues: {
    search: '',
  },
};

export const inputsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOYS_UPDATE_INPUT: {
      return {...state, inputValues: {...state.inputValues, ...action.payload}};
    }
    default:
      return state;
  }
};
