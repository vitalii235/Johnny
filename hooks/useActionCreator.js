import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import toysActions from '../store/toys/toys.actions';
import inputActions from '../store/inputs/inputs.actions';

export const useActionCreator = () => {
  const dispatch = useDispatch();
  return bindActionCreators(
    {
      ...toysActions,
      ...inputActions,
    },
    dispatch,
  );
};
