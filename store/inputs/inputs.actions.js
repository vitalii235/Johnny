import {TOYS_UPDATE_INPUT} from './inputs.types';

class ToysActions {
  updateInput = payload => ({
    type: TOYS_UPDATE_INPUT,
    payload,
  });
}

export default new ToysActions();
