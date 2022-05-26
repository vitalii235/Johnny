import {Text, View, Button, StyleSheet} from 'react-native';
import React from 'react';
import {useActionCreator} from '../../hooks/useActionCreator';
import {useNavigation} from '@react-navigation/native';

const RenderListItem = ({item}) => {
  const {deleteToy, updateInput} = useActionCreator();
  const navigation = useNavigation();

  const handleUpdate = toy => {
    navigation.navigate('ToyDetail', {creation: false, id: toy.id});
    const {name, description, species} = toy;
    updateInput({name, description, species});
  };
  return (
    <View style={styles.container}>
      <Text>{item.name} - {item.quantity} items</Text>
      <View style={styles.buttonContainer}>
        <Button title={'Delete'} onPress={() => deleteToy(item.id)} />
        <Button title={'Update'} onPress={() => handleUpdate(item)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'grey',
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 6,
    marginTop: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  }
});

export default RenderListItem;
