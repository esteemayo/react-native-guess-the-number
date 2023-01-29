import { StyleSheet, TextInput } from 'react-native';

const Input = ({ style }) => {
  return (
    <TextInput style={{ ...styles.input, ...style }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
