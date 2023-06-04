import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const AttractionDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Attraction Details</Text>
    </SafeAreaView>
  );
};
export default React.memo(AttractionDetails);
