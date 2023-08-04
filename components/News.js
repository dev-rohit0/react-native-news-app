import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
// import { withNavigation } from 'react-navigation';

const News = ({ category }) => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=98e5e3d358cc4046a110612b1762c2f8`)
      .then(res => res.json())
      .then(data => {
        setNewsData(data.articles);
      });
  }, [category]);

  const renderNewsItem = ({ item }) => {
    

    return (
      <TouchableOpacity>
        <View style={styles.newsItem}>
          <Image style={styles.image} source={{ uri: item.urlToImage }} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  // const renderNewsItem = ({ item }) => {
  //   return (
  //     <View style={styles.newsItem}>
  //       <Image style={styles.image} source={{ uri: item.urlToImage }} />
  //       <Text style={styles.title}>{item.title}</Text>
  //       <Text style={styles.description}>{item.description}</Text>
  //     </View>
  //   );
  // };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Top News of {category}</Text>
      <FlatList
        data={newsData}
        renderItem={renderNewsItem}
        keyExtractor={(item) => item.title}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 100
  },
  newsItem: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '100%',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20
  }
});

export default News;
