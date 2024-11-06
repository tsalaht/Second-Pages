import React from 'react';
import { Text } from 'react-native';
import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../Colors';
const GradientText  = (
proops:any
) => {
  return (
    <MaskedView
      maskElement={
        <Text
        style={[proops.style]}
        >
          {proops.text}
        </Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={['#FFFCA8',Colors.PRIMARY_600, '#FFAF36','#F1DC83']}
      >
        <Text
          style={[proops.style,{opacity:0}]}
        >
          {proops.text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText ;
