import React, { useEffect, useState } from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import api from "../services/api";
import CardPost from "../components/CardPost";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      try {
        const [postsRes, usersRes] = await Promise.all([
          api.get("/posts"),
          api.get("/users"),
        ]);

        const postsWithUser = postsRes.data.map((post) => {
          const user = usersRes.data.find((u) => u.id === post.userId);
          return {
            ...post,
            userName: user ? user.name : "Desconhecido",
          };
        });

        setPosts(postsWithUser);
      } catch (error) {
        console.error("Erro ao carregar posts:", error);
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" color="#FD7C7C" />
      </View>
    );
  }

  return (
    <FlatList
      data={posts}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <CardPost title={item.title} body={item.body} userName={item.userName} />
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
