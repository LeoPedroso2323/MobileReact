import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardPost from '../components/CardPost';

export default function Posts({ route }) {
  const { posts, users } = route.params;

  const renderItem = ({ item }) => {
    const user = users.find((u) => u.id === item.userId);
    return (
      <CardPost
        title={item.title}
        body={item.body}
        author={user?.name || 'Desconhecido'}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
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
