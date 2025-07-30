import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";

export default function CardTodo({ title, completed, userName, onToggle }) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Checkbox value={completed} onValueChange={onToggle} color="#FD7C7C" />
        <Text style={[styles.title, completed && styles.checked]}>{title}</Text>
      </View>
      <Text style={styles.user}>Responsável: {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
  },
  checked: {
    textDecorationLine: "line-through",
    color: "#999",
  },
  user: {
    fontSize: 14,
    color: "#555",
  },
});
