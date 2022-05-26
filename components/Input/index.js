import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getInputValueSelector} from '../../store/inputs/inputs.reselect';
import {useActionCreator} from '../../hooks/useActionCreator';

const Input = ({name, style, ...rest}) => {
  const value = useSelector(getInputValueSelector(name));
  const {updateInput} = useActionCreator();
  const dispatch = useDispatch();
  return (
    <TextInput
      style={StyleSheet.compose(styles.container, style)}
      value={value}
      onChangeText={e => dispatch(updateInput({[name]: e}))}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 13,
    borderColor: '#CECFD0',
    borderWidth: 1,
    borderRadius: 8,
  },
});

export default Input;
