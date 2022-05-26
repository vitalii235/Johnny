import React from 'react';
import Layout from '../../components/Layout';
import {SectionList, StyleSheet} from 'react-native';
import {useActionCreator} from '../../hooks/useActionCreator';
import {useSelector} from 'react-redux';
import {getInputValueSelector} from '../../store/inputs/inputs.reselect';
import {parseToysToTypedListSelector} from '../../store/toys/toys.reselect';
import {useDebounce} from '../../hooks/useDebounce';
import SearchToys from './components/SearchToys';
import Button from '../../components/Button';
import RenderListItem from '../../components/RenderListItem';
import ListHeader from '../../components/ListHeader';

const ToysSearch = () => {
  const {getAllToys, findToys} = useActionCreator();
  const toys = useSelector(parseToysToTypedListSelector);
  const inputValue = useSelector(getInputValueSelector('search'));

  useDebounce({cb: () => findToys(inputValue), trigger: inputValue});
  return (
    <Layout>
      <SearchToys />
      <SectionList
        sections={toys}
        style={styles.listContainer}
        keyExtractor={(item, index) => item.id + index}
        renderItem={RenderListItem}
        renderSectionHeader={ListHeader}
      />
      <Button
        title={'Get all toys'}
        onPress={getAllToys}
        style={styles.button}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default ToysSearch;
