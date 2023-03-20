import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import React,{useEffect} from 'react';
import {Color, Images, Fonts} from '../constants';
import {Display} from '../utils';
import {scale} from '../utils/Display';

const SplashScreen = ({navigation}) => {

useEffect(()=>{
  setTimeout(()=>{
    navigation.navigate('Welcome')
  },3000)
},[])

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View style={styles.container}>
        <StatusBar
          hidden={false}
          barStyle="dark-content"
          backgroundColor={Color.DEFAULT_GREEN}
          translucent={true}
        />
        <Image
          source={Images.PLATE}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.titleText}>Food Delivery</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_GREEN,
  },
  image: {
    height: scale(150),
    width: scale(150),
  },
  titleText: {
    color: Color.DEFAULT_WHITE,
    fontSize: 32,
    fontFamily: Fonts.POPPINS_BOLD,
  },
});
export default SplashScreen;
