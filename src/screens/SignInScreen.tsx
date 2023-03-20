import {View, Text, StyleSheet,StatusBar} from 'react-native';
import React from 'react';
import {Color} from '../constants';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';


const SignInScreen = () => {
  return (
    <View style={styles.container}>
        <StatusBar/>
      <Text>SignInScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.DEFAULT_WHITE,
  },
});

export default SignInScreen;
