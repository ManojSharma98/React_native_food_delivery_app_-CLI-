import {View, Animated, StyleSheet, TouchableOpacity,Easing} from 'react-native';
import React,{useState} from 'react';
import {Color} from '../constants';
import {scale} from '../utils/Display';

const containerStyle = (size,isActive) => ({
  backgroundColor: isActive? Color.DEFAULT_GREEN:Color.DEFAULT_GREY,
  height: scale(32 * size),
  width: scale(64 * size),
  borderRadius: scale(32),
  justifyContent: 'center',
  padding: scale(size),
});

const toggleStyle = (size,animatedValue) => ({
  height: scale(24 * size),
  width: scale(24 * size),
  backgroundColor: Color.DEFAULT_WHITE,
  borderRadius: scale(32),
  transform:[{
        translateX:animatedValue
  }]
});

const ToggleButton = ({size}) => {
    const [isActive,setIsActive]=useState(false);
    const [animatedValue,setAnimatedValue]= useState(new Animated.Value(0));

    const toggleHandle=()=>{
        Animated.timing(animatedValue,{
            toValue: isActive?0:32*size,
            duration:250,
            easing:Easing.bounce,
            delay:0,
            useNativeDriver:true
        }).start();
        setIsActive(!isActive);
    }

  return (
    <TouchableOpacity style={containerStyle(size,isActive)} onPress={()=>toggleHandle()} >
      <Animated.View style={toggleStyle(size,animatedValue)}/>
    </TouchableOpacity>
  );
};

export default ToggleButton;
