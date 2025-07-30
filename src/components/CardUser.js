import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CardUser({ name, email, company, zipcode }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.info}>Email: {email}</Text>
      <Text style={styles.info}>Empresa: {company}</Text>
      <Text style={styles.info}>CEP: {zipcode}</Text>
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
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 6,
  },
  info: {
    fontSize: 16,
    marginBottom: 4,
  },
});
