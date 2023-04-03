import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Color } from '../constants';
import { scale } from '../utils/Display';

type ButtonViewProps={
    title: string;
    onPress():void;
    backgroundColor:string;
}

const ButtonView = ({title,onPress,backgroundColor}:ButtonViewProps) => {
  return (
    <TouchableOpacity
    onPress={onPress}
    style={{
        backgroundColor: backgroundColor ,
        padding:scale(15),
        borderRadius:scale(10),
    }}
    >
      <Text style={{color:Color.DEFAULT_WHITE ,fontSize:scale(16),textAlign:'center'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default ButtonView