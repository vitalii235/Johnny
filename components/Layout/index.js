import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

const Layout = ({children, style}) => {
  return <SafeAreaView style={StyleSheet.compose(styles.container, style)}>{children}</SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
});

export default Layout;
