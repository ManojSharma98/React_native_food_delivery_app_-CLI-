import {View, Text, SafeAreaView, TextInput, Button} from 'react-native';
import React,{useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {scale} from '../utils/Display';
import {Color} from '../constants';
import { ScrollView } from 'react-native-gesture-handler';
import { ButtonView, ToggleButton } from '../components';

const SignInScreen = ({navigation}) => {

  const [isPasswordShow,setPasswordShow] = useState(true);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{paddingHorizontal: scale(15)}}>
        <View style={{flexDirection: 'row'}}>
          <Ionicons name="arrow-back-outline" size={25} />
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: scale(20),
            }}>
            <Text style={{fontSize: scale(20),fontWeight:'500'}}>Sign in</Text>
          </View>
        </View>
        <Text
          style={{
            marginTop: scale(100),
            fontSize: scale(22),
            fontWeight: '700',
          }}>
          Welcome to
        </Text>
        <Text style={{fontSize: scale(14), marginTop: scale(30),fontWeight:'400'}}>
          {'Enter Your Username and Password for \nSign in. Enjoy your food.'}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Color.LIGHT_GREY,
            paddingHorizontal: scale(16),
            paddingVertical: scale(16),
            alignItems: 'center',
            borderRadius: scale(10),
            marginTop: scale(35),
          }}>
          <Feather name="user" size={20} color={Color.DEFAULT_GREY} />
          <TextInput
            placeholder="Username"
            style={{marginHorizontal: scale(16), flex: 1}}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: Color.LIGHT_GREY,
            paddingHorizontal: scale(16),
            paddingVertical: scale(16),
            alignItems: 'center',
            borderRadius: scale(10),
            marginTop: scale(15),
          }}>
          <Feather name="lock" size={20} color={Color.DEFAULT_GREY} />
          <TextInput
            placeholder="Password"
            secureTextEntry={isPasswordShow}
            style={{marginHorizontal: scale(16), flex: 1}}
          />
          <View style={{flexDirection: 'row'}}>
            <Feather name={isPasswordShow ? 'eye-off':'eye' } size={20} color={Color.DEFAULT_GREY} onPress={()=>{
              setPasswordShow(!isPasswordShow);
            }} />
          </View>
        </View>
        <View style={{justifyContent:'space-between', marginTop: scale(16),flexDirection:'row'}}>
          <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
          <ToggleButton size={0.7}/>
          <Text style={{color:Color.DEFAULT_GREY,marginLeft:scale(5)}}>Remember Me </Text>
          </View>
          <Text style={{color: Color.DEFAULT_GREEN}} onPress={()=>{
            navigation.navigate('ForgotPassword')
          }} >Forgot Password</Text>
        </View>
        <View style={{marginVertical: scale(20)}}>
          <ButtonView title="Sign In" onPress={() => {}} backgroundColor={Color.DEFAULT_GREEN} />
        </View>
        <Text style={{alignSelf: 'center'}} onPress={()=>{
           navigation.navigate('SignUp')
        }} >
          {'Do not have an account? Signup '}
        </Text> 
        <Text style={{alignSelf: 'center',marginVertical:scale(50)}}>
          {'OR'}
        </Text>
        <ButtonView title='Connect With Facebook' onPress={()=>{}} backgroundColor={Color.FABEBOOK_BLUE} />
        <View style={{marginTop:scale(10)}}>
        <ButtonView title='Connect With Google' onPress={()=>{}} backgroundColor={Color.GOOGLE_BLUE} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignInScreen;
