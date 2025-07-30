import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import api from "../services/api";
import CardTodo from "../components/CardTodo";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [todosRes, usersRes] = await Promise.all([
          api.get("/todos"),
          api.get("/users"),
        ]);

        const todosComUsuario = todosRes.data.map((todo) => {
          const user = usersRes.data.find((u) => u.id === todo.userId);
          return {
            ...todo,
            userName: user ? user.name : "Desconhecido",
          };
        });

        setTodos(todosComUsuario);
      } catch (error) {
        console.error("Erro ao buscar tarefas:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  const toggleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FD7C7C" />
      </View>
    );
  }

  return (
    <FlatList
      data={todos}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardTodo
          title={item.title}
          completed={item.completed}
          userName={item.userName}
          onToggle={() => toggleComplete(item.id)}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
