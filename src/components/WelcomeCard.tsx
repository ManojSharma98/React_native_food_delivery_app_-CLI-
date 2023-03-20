import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Display, { scale } from '../utils/Display';
import { Fonts, Images } from '../constants';

type WelcomeCardProps = {
  title: String;
  content: string;
  image: string;
};

const WelcomeCard = ({title, content, image}: WelcomeCardProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={Images[image]} resizeMode="contain"/>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.contentText}>{content}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:Display.setWidth(100),
  },
  image: {
    height:scale(200),
    width:scale(200),
  },
  title: {
    fontSize:22,
    fontFamily:Fonts.POPPINS_BOLD
  },
  contentText: {
    fontSize:18,
    fontFamily:Fonts.POPPINS_LIGHT,
    textAlign:'center',
    marginHorizontal:scale(20),
  },
});

export default WelcomeCard;
