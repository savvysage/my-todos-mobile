import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function TodoList({ list, deleteHandler }) {
  return (
    <ScrollView style={styles.list}>
      {list.map(item => (
        <View style={styles.item} key={item.key}>
          <Text style={styles.itemText}>{item.todo}</Text>
          <TouchableOpacity
            style={styles.itemDelete}
            onPress={() => deleteHandler(item.key)}
          >
            <Text style={styles.itemDeleteText}>X</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  list: {
    margin: 20,
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: 1,
    borderRadius: 5,
    backgroundColor: '#98ff98',
  },
  itemText: {
    flex: 9,
    fontSize: 25,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  itemDelete: {
    flex: 1,
    justifyContent: 'center',
  },
  itemDeleteText: {
    color: 'red',
  },
});