import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

// Add Validation
// Add pre-entered todos

export default function App() {
  const [todoList, setTodoList] = useState([]);

  const addTodo = (todo) => {
    var key;

    if (todoList.length != 0) {
      key = todoList[0].key + 1;
    } else {
      key = 1;
    }

    setTodoList([{key: key, todo: todo}, ...todoList]);
  }

  const deleteTodo = key => setTodoList(
    prevTodoList => prevTodoList.filter(todo => todo.key != key)
  );

  return (
    <View style={styles.container}>
      <Header />
      <AddTodo addHandler={addTodo} />
      <TodoList list={todoList} deleteHandler={deleteTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6a0dad',
  },
});
