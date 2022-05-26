import React from 'react';
import {StyleSheet, View} from 'react-native';
import Input from '../../components/Input';
import Layout from '../../components/Layout';
import Button from '../../components/Button';
import { useSelector } from "react-redux";
import { getInputValueSelector } from "../../store/inputs/inputs.reselect";
import { useActionCreator } from "../../hooks/useActionCreator";
import { useNavigation } from "@react-navigation/native";

const ToyDetail = ({route:{params}}) => {
  const {creation, id} = params;
  const name = useSelector(getInputValueSelector('name'));
  const description = useSelector(getInputValueSelector('description'));
  const species = useSelector(getInputValueSelector('species'));
  const {createToy, updateToy} = useActionCreator();
  const navigation = useNavigation();

  const isButtonDisabled = !name || !description || !species;

  const buttonName = creation ? 'Create' : 'Update';
  const handleSubmit = () => {
    creation ? createToy(navigation) : updateToy(id, navigation);
  };
  return (
    <Layout>
      <View style={styles.container}>
        <Input
          name={'name'}
          style={styles.input}
          placeholder={'Name'}
        />
        <Input
          name={'description'}
          style={styles.input}
          placeholder={'Description'}
        />
        <Input name={'species'} style={styles.input} placeholder={'Species'} />
        <Button
          title={buttonName}
          color={'white'}
          disabled={isButtonDisabled}
          onPress={handleSubmit}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    marginTop: 15,
  }
});

export default ToyDetail;
