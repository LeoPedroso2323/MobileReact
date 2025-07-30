import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import api from '../services/api';

export default function Home({ navigation }) {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function loadData() {
      try {
        const [postsRes, usersRes, todosRes] = await Promise.all([
          api.get('/posts'),
          api.get('/users'),
          api.get('/todos'),
        ]);
        setPosts(postsRes.data);
        setUsers(usersRes.data);
        setTodos(todosRes.data);
      } catch (error) {
        console.error('Erro ao carregar dados:', error);
      }
    }
    loadData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Posts', { posts, users })}
      >
        <Text style={styles.text}>Ver Posts</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Users', { users })}
      >
        <Text style={styles.text}>Ver Usuários</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Todos', { todos, users })}
      >
        <Text style={styles.text}>Ver Tarefas</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 16,
    marginVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18,
  },
});
