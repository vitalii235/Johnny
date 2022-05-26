import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ListHeader = ({section: {title}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 20,
    marginTop: 15,
  },
});

export default ListHeader;
