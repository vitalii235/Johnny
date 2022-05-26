import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ButtonCustom = ({style, title, disabled, ...rest}) => {
  return <TouchableOpacity
      style={[
        StyleSheet.compose(styles.container, style),
        disabled && styles.disabled,
      ]}
      {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    padding: 13,
    borderRadius: 8,
  },
  disabled: {
    backgroundColor: 'grey',
  },
  text: {
    color: 'white',
    textAlign: 'center',
  }
})
export default ButtonCustom;
