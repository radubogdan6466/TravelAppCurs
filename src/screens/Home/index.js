import React, {useState} from 'react';
import {View, SafeAreaView} from 'react-native';
import Title from '../../components/Title';
import styles from './styles';
import Categories from '../../Categories/index';
import AttractionCard from '../../AttractionCard/index';
const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Title text="Where do" style={{fontWeight: 'normal'}} />
        <Title text="you want to go?" />
        <Title text="Explore Attractions" style={styles.subtitles} />
        <Categories
          selectedCategory={selectedCategory}
          onCategoryPress={setSelectedCategory}
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

        <View style={styles.row}>
          <AttractionCard
            title="Timisoara center"
            subtitle="Centru"
            imageSrc="https://upload.wikimedia.org/wikipedia/commons/e/ef/Pia%C8%9Ba_Victoriei_Timi%C8%99oara.jpg"
          />
          <AttractionCard
            title="Piat Unirii"
            subtitle="Piata Unirii"
            imageSrc="https://images.pexels.com/photos/10135693/pexels-photo-10135693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Home;
