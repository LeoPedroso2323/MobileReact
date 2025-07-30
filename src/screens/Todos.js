import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardTodo from '../components/CardTodo';

export default function Todos({ route }) {
  const todos = route.params?.todos || [];
  const users = route.params?.users || [];

  const [todosList, setTodosList] = useState(todos);

  const toggleCompleted = (id) => {
    const updated = todosList.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodosList(updated);
  };

  const renderItem = ({ item }) => {
    const user = users.find((u) => u.id === item.userId);
    return (
      <CardTodo
        id={item.id}
        title={item.title}
        completed={item.completed}
        userName={user?.name || 'Desconhecido'}
        onToggle={toggleCompleted}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={todosList}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
  },
});
