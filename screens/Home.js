import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Navbar from '../components/Navbar';
import News from '../components/News';
import TrendingNews from '../components/TrendingNews';

const Home = () => {
    const [activeCategory, setActiveCategory] = useState('business');

    return (
        <View style={styles.container}>
            <Navbar activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <ScrollView>
                <TrendingNews />
                <News category={activeCategory} />
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 50,
        justifyContent: 'center',
    },
});

export default Home;
