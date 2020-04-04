import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';

export default function AddTodo({ addHandler }) {
  const [todo, setTodo] = useState('');

  return (
    <TextInput
      style={styles.input}
      placeholder='What do you want to do?'
      value={todo}
      onChangeText={val => setTodo(val)}
      onSubmitEditing={() => {addHandler(todo); setTodo('');}}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0000ff',
    backgroundColor: '#fffff0',
    textAlign: 'center',
    fontSize: 20,
    color: '#800020',
    marginVertical: 20,
    marginHorizontal: 50,
    padding: 10,
  },
});