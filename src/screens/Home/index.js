import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../Categories/index';

const Home = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitles} />
        <Categories
          selectedCategory="All"
          categories={[
            'All',
            'Popular',
            'Historical',
            'Random',
            'Trending',
            'Exclusive',
            'Others',
          ]}
        />
      </View>
    </SafeAreaView>
  );
};
export default Home;
