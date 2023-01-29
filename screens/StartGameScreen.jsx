import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import Colors from '../constants/color';

const StartGameScreen = () => {
  const [number, setNumber] = useState('');

  const handleChange = (value) => {
    setNumber(value.replace(/[^0-9]/g, ''));
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game!</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
          value={number}
          onChangeText={handleChange}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={Colors.accent} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={Colors.primary} />
          </View>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
