import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CardPost({ title, body, author }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text>{body}</Text>
      <Text style={styles.author}>Autor: {author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  author: {
    marginTop: 6,
    fontStyle: 'italic',
  },
});
