import {createSelector} from 'reselect';

const baseSelector = state => state.inputs;

export const getInputValueSelector = name =>
  createSelector(baseSelector, state => {
    return state.inputValues[name] || '';
  });
