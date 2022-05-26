import {UPDATE_ALL_TOYS} from './toys.types';
import toysApi from '../../API/toys.api';
import inputsActions from '../inputs/inputs.actions';

class ToysActions {
  updateToys = payload => ({
    type: UPDATE_ALL_TOYS,
    payload,
  });

  refreshInputState = () =>
    inputsActions.updateInput({
      description: '',
      name: '',
      species: '',
      search: '',
    });

  getAllToys = () => {
    return async dispatch => {
      const response = await toysApi.getAllToys();
      dispatch(this.updateToys(response));
    };
  };

  findToys = name => {
    return async dispatch => {
      if (!name) {
        return dispatch(this.updateToys([]));
      }
      const response = await toysApi.findToys(name);
      dispatch(this.updateToys(response));
    };
  };

  deleteToy = id => {
    return async (dispatch, state) => {
      await toysApi.deleteToy(id);
      const store = state().toys;
      const toys = store.toys;
      dispatch(this.updateToys(toys.filter(i => `${i.id}` !== `${id}`)));
    };
  };

  updateToy = (id, navigation) => {
    return async (dispatch, state) => {
      const store = state().inputs;
      const { toys } = state().toys;
      const toy = toys.find(toy => toy.id === id);
      const quantity = toy.quantity || 1;
      const {name, description, species} = store.inputValues;
      await toysApi.updateToy(id, {name, description, species, quantity});
      dispatch(this.refreshInputState());
      dispatch(this.updateToys([]));
      navigation && navigation.goBack();
    };
  };

  createToy = navigation => {
    return async (dispatch, state) => {
      const store = state().inputs;
      const {name, description, species} = store.inputValues;
      const foundToy = await toysApi.findToy(name, description);
      let quantity = 1;
      if (foundToy?.length) {
        quantity += foundToy[0].quantity;
      }

      if (quantity === 1) {
        await toysApi.createToy({
          name,
          description,
          species,
          quantity,
        });
      }
      if (quantity > 1) {
        await toysApi.updateToy(foundToy[0].id, {
          name,
          description,
          species,
          quantity,
        });
      }
      dispatch(this.refreshInputState());
      navigation && navigation.goBack();
    };
  };
}

export default new ToysActions();
