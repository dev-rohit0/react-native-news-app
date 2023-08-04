import React from 'react';
import { View, Text, Pressable, FlatList, StyleSheet } from 'react-native';

const Navbar = ({ activeCategory, setActiveCategory }) => {
  const categories = ['general','business', 'sports', 'entertainment', 'health','technology'];

  const renderCategory = ({ item }) => {
    const isActive = item === activeCategory;

    return (
      <Pressable
        style={({ pressed }) => [
          styles.categoryItem,
          { backgroundColor: pressed ? 'gray' : isActive ? 'blue' : 'lightgray' },
        ]}
        onPress={() => setActiveCategory(item)}
      >
        <Text style={[styles.categoryText, { color: isActive ? 'white' : 'black' }]}>
          {item.toUpperCase()}
        </Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderCategory}
        keyExtractor={(item) => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft:10,
    paddingRight:10,
    width: '100%',
  },
  categoryItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    marginRight: 10,
  },
  categoryText: {
    fontSize: 16,
  },
});

export default Navbar;
