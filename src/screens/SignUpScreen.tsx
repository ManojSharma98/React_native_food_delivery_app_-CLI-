import { View, Text, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { ToggleButton, ButtonView } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Color } from '../constants';
import { scale } from '../utils/Display';

const SignUpScreen = ({navigation}) => {

  const [isPasswordShow,setPasswordShow] = useState(true);
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <ScrollView style={{paddingHorizontal: scale(15)}}>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>{
                    navigation.goBack();
                }}>
              <Ionicons name="arrow-back-outline" size={25}  />
              </TouchableOpacity>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: scale(20),
                }}>
                <Text style={{fontSize: scale(20),fontWeight:'500'}}>Sign Up</Text>
              </View>
            </View>
            <Text
              style={{
                marginTop: scale(100),
                fontSize: scale(22),
                fontWeight: '700',
              }}>
              Create Account
            </Text>
            <Text style={{fontSize: scale(14), marginTop: scale(10),fontWeight:'400'}}>
              {'Enter Your Name, Email and Password for \nSign Up.'}
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
              <Feather name="mail" size={20} color={Color.DEFAULT_GREY} />
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
           
            <View style={{marginVertical: scale(40)}}>
              <ButtonView title="Sign Up" onPress={() => {
                navigation.navigate('RegisterPhone')
              
              }} backgroundColor={Color.DEFAULT_GREEN} />
            </View>
            <Text style={{alignSelf: 'center'}} onPress={()=>{
              
            }} >
              {'Already Have an Account? Sign In '}
            </Text> 
            <Text style={{alignSelf: 'center',marginVertical:scale(30)}}>
              {'OR'}
            </Text>
            <ButtonView title='Connect With Facebook' onPress={()=>{}} backgroundColor={Color.FABEBOOK_BLUE} />
            <View style={{marginTop:scale(10)}}>
            <ButtonView title='Connect With Google' onPress={()=>{}} backgroundColor={Color.GOOGLE_BLUE} />
            </View>
          </ScrollView>
        </SafeAreaView>
      );
}

export default SignUpScreen 