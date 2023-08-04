import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, Pressable, StyleSheet } from 'react-native';

const TrendingNews = ({}) => {
  const [trending, setTrending] = useState([]);
  
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=98e5e3d358cc4046a110612b1762c2f8')
      .then(res => res.json())
      .then(data => {
        setTrending(data.articles);
      });
  }, []);

  const renderTrending = ({ item }) => {
    return (
      <Pressable style={styles.trendingItem}>
        <View>
          <Image style={styles.image} source={{ uri: item.urlToImage }} />
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          {/* <Text style={styles.description}>{item.description}</Text> */}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
        <Text style={styles.section}>Trending News</Text>
      <FlatList
        data={trending}
        renderItem={renderTrending}
        keyExtractor={(item) => item.title}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    paddingBottom: 70,
    width: '100%',
    maxHeight:1200
  },
  trendingItem: {
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    marginRight: 10,
    width: 300,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  section: {
    fontSize: 24,
    margin: 15,
    fontWeight:'bold'
  },
});

export default TrendingNews;
