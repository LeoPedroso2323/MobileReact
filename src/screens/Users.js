import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import CardUser from '../components/CardUser';

export default function Users({ route }) {
  const { users } = route.params;

  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardUser
            name={item.name}
            email={item.email}
            company={item.company?.name}
            zipcode={item.address?.zipcode}
          />
        )}
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
