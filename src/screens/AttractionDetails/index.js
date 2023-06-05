import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Title from '../../components/Title';
import InfoCard from '../../components/InfoCard';
import Menu from '../../components/Menu';
const AttractionDetails = ({navigation, route}) => {
  const {item} = route?.params || {};
  const mainImage = item?.images?.length ? item?.images[0] : null;
  const slicedImages = item?.images?.length ? item?.images?.slice(0, 5) : [];
  const diffImages = item?.images?.length - slicedImages?.length;
  const onBack = () => {
    navigation.goBack();
  };
  const onGalleryNavigate = () => {
    navigation.navigate('Gallery', {images: item?.images});
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ImageBackground
          style={styles.mainImage}
          imageStyle={{borderRadius: 20}}
          source={{uri: mainImage}}>
          <View style={styles.header}>
            <Pressable onPress={onBack} hitStop={8}>
              <Image
                style={styles.icon}
                source={require('../../assets/back.png')}
              />
            </Pressable>
          </View>
          <Pressable onPress={onGalleryNavigate} style={styles.footer}>
            {slicedImages?.map((image, index) => (
              <View key={image}>
                <Image source={{uri: image}} style={styles.miniImage} />
                {diffImages > 0 && index === slicedImages?.length - 1 ? (
                  <View style={styles.moreImagesContainer}>
                    <Text style={styles.moreImages}>{`+${diffImages}`}</Text>
                  </View>
                ) : null}
              </View>
            ))}
          </Pressable>
        </ImageBackground>
        <View style={styles.headerContainer}>
          <View>
            <Title style={styles.title} text={item?.name} />
            <Text style={styles.city}>{item?.city}</Text>
            <Title style={styles.title} text={item?.entry_price} />
          </View>
        </View>
        <InfoCard
          text={item?.address}
          icon={require('../../assets/locatie.png')}
        />
        <InfoCard
          text={`Open
${item?.opening_time} - ${item?.closing_time}`}
          icon={require('../../assets/schedule.png')}
        />

        <InfoCard
          text={
            <View>
              <Text style={{fontWeight: 'bold'}}>Bere</Text>
              {item?.Menu?.Bere.map((bere, index) => (
                <View key={index} style={{flexDirection: 'row'}}>
                  <Text>{bere}</Text>
                  <Text style={{marginLeft: 10}}>
                    - {item?.Preturi?.Bere[index]} lei
                  </Text>
                </View>
              ))}
              <Text style={{fontWeight: 'bold'}}>Mancare</Text>
              {item?.Menu?.Mancare.map((Mancare, index) => (
                <View key={index} style={{flexDirection: 'row'}}>
                  <Text>{Mancare}</Text>
                  <Text style={{marginLeft: 10}}>
                    - {item?.Preturi?.Mancare[index]} lei
                  </Text>
                </View>
              ))}
            </View>
          }
          icon={require('../../assets/food.png')}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default React.memo(AttractionDetails);
