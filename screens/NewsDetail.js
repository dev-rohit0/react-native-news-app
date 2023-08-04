import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewsDetail = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{newsItem.title}</Text>
      <Text style={styles.content}>{newsItem.content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  // Styles for News Detail screen
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default NewsDetail;
