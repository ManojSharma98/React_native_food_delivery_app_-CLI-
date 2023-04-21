import { View, Text, SafeAreaView, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { ToggleButton, ButtonView } from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { Color } from '../constants';
import { scale } from '../utils/Display';

const ForgotPasswordScreen = ({navigation}) => {
    const [isPasswordShow,setPasswordShow] = useState(true);


    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView style={{paddingHorizontal: scale(15)}}>
          <View style={{flexDirection: 'row'}}>
            <Ionicons name="arrow-back-outline" size={25} onPress={()=>{
                navigation.goBack();
            }} />
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: scale(20),
              }}>
              <Text style={{fontSize: scale(20),fontWeight:'500'}}>Forgot Password</Text>
            </View>
          </View>
          <Text
            style={{
              marginTop: scale(100),
              fontSize: scale(22),
              fontWeight: '700',
            }}>
            Forgot Password
          </Text> 
          <Text style={{fontSize: scale(14), marginTop: scale(30),fontWeight:'400'}}>
            {'Please enter your email so we can help \nyou to recover Your password'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Color.LIGHT_GREY,
              paddingHorizontal: scale(16),
              paddingVertical: scale(16),
              alignItems: 'center',
              borderRadius: scale(10),
              marginTop: scale(55),
            }}>
            <Feather name="mail" size={20} color={Color.DEFAULT_GREY} />
            <TextInput
              placeholder="Email"
              style={{marginHorizontal: scale(16), flex: 1}}
            />
          </View>

        
          <View style={{marginTop: scale(60)}}>
            <ButtonView title="Reset Password" onPress={() => {}} backgroundColor={Color.DEFAULT_GREEN} />
          </View>

         
          
        </ScrollView>
      </SafeAreaView>
    );
}

export default ForgotPasswordScreen