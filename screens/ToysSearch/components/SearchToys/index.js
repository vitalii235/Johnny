import {View, StyleSheet} from 'react-native';
import Input from '../../../../components/Input';
import React from 'react';
import Button from '../../../../components/Button';
import {useSelector} from 'react-redux';
import {getInputValueSelector} from '../../../../store/inputs/inputs.reselect';
import {useNavigation} from '@react-navigation/native';
import {useActionCreator} from '../../../../hooks/useActionCreator';

const SearchToys = () => {
  const inputValue = useSelector(getInputValueSelector('search'));
  const {updateInput} = useActionCreator();

  const navigation = useNavigation();
  const handleCreate = () => {
    navigation.navigate('ToyDetail', {creation: true});
    updateInput({name: inputValue});
  };
  return (
    <View style={styles.container}>
      <Input name={'search'} style={styles.input} />
      <Button disabled={!inputValue} title={'Create'} onPress={handleCreate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    width: '80%',
  },
});

export default SearchToys;
