import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {ToggleButton, ButtonView} from '../components';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {Color, CountryCode} from '../constants';
import Display, {scale} from '../utils/Display';
import {StaticImageService} from '../Services';
import { FlatList } from 'react-native-gesture-handler';


interface FlagItemProps{
  code:string;
  name:string;
  dial_code:string|null;
}

const getDropDownStyle = (y:any) => ({...styles.countryDropDown,top:y+60});

const RegisterPhoneScreen = ({navigation}) => {
  const [selectedCountry, setSelectedCountry] = useState(
    CountryCode.find(country => country.name === 'India'),
  );
  const [inputContainerY, setInputContainerY] = useState(0);
  const [isDropDownOpen,setIsDropDownOpen] = useState(false);
  const FlagItem=({code,name,dial_code}:FlagItemProps)=>{
    return(
      <TouchableOpacity  
      style={{flexDirection:'row',alignItems:'center'}}
      onPress={()=>{
        setSelectedCountry()
        setIsDropDownOpen(false)
      }}>
        <Image source={{uri:StaticImageService.getFlagIcon(code)}} style={{height:20,width:20,marginHorizontal:10}}/>
        <Text>{dial_code} </Text>
      <Text style={{marginVertical:scale(5),marginHorizontal:scale(5)}} >{name}</Text>
  
      </TouchableOpacity>
    )
  }
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView style={{paddingHorizontal: scale(15)}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Ionicons name="arrow-back-outline" size={25} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: scale(20),
            }}>
            <Text style={{fontSize: scale(20), fontWeight: '500'}}>
              Register Phone
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: scale(24),
            marginTop: scale(50),
            fontWeight: '600',
          }}>
          {'Enter Your Registered phone \nnumber to Log in '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginHorizontal: scale(20),
            marginVertical: scale(60),
          }}
          onLayout={({
            nativeEvent: {
              layout: {y},
            },
          }) => setInputContainerY(y)}>
          <TouchableOpacity 
          onPress={()=>{
            setIsDropDownOpen(!isDropDownOpen)
          }}
            style={{
              backgroundColor: Color.LIGHT_GREY,
              width: Display.setWidth(22),
              marginRight: scale(10),
              borderRadius: scale(8),
              height: Display.setHeight(6),
              justifyContent: 'space-evenly',
              alignItems: 'center',
              borderWidth: 0.5,
              borderColor: Color.LIGHT_GREY2,
              flexDirection: 'row',
            }}>
            <Image
              source={{
                uri: StaticImageService.getFlagIcon(selectedCountry?.code),
              }}
              style={{height: 20, width: 20}}
            />
            <Text>{selectedCountry?.dial_code}</Text>
            <MaterialIcon name="keyboard-arrow-down" size={18} />
          </TouchableOpacity >
          <View
            style={{
              backgroundColor: Color.LIGHT_GREY,
              flex: 1,
              paddingHorizontal: scale(10),
              borderRadius: scale(8),
              height: Display.setHeight(6),
              justifyContent: 'center',
              borderWidth: 0.5,
              borderColor: Color.LIGHT_GREY2,
            }}>
            <TextInput
              placeholder=" Phone number"
              placeholderTextColor={Color.DEFAULT_GREY}
              selectionColor={Color.DEFAULT_GREY}
              keyboardType="number-pad"
              style={{
                fontSize: 18,
                textAlignVertical: 'center',
                padding: 0,
                height: Display.setHeight(6),
                color: Color.DEFAULT_BLACK,
              }}
            />
          </View>
        </View>
        { isDropDownOpen? <View style={getDropDownStyle(inputContainerY)}>
          <FlatList
          data={CountryCode}
          keyExtractor={(item )=>item.code}
          renderItem={({item})=> FlagItem(item)} 
          />
        </View>:null}

        <View style={{marginVertical: scale(40)}}>
          <ButtonView
            title="Sign Up"
            onPress={() => {
              navigation.navigate('RegisterPhone');
            }}
            backgroundColor={Color.DEFAULT_GREEN}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  countryDropDown: {
    backgroundColor: Color.LIGHT_GREY,
    position: 'absolute',
    width: Display.setWidth(70),
    height: Display.setHeight(50),
    marginLeft: 20,
    borderRadius: 10,
    borderWidth: 0.5,
    borderColor: Color.DEFAULT_GREY,
    zIndex: 3,
  },
});

export default RegisterPhoneScreen;
