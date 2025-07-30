import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Checkbox from 'expo-checkbox';

export default function CardTodo({ id, title, completed, userName, onToggle }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>Usuário: {userName}</Text>
      <View style={styles.checkboxContainer}>
        <Checkbox value={completed} onValueChange={() => onToggle(id)} />
        <Text style={styles.checkboxLabel}>
          {completed ? 'Concluído' : 'Pendente'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9fbe7',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 6,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },
  checkboxLabel: {
    marginLeft: 8,
  },
});
