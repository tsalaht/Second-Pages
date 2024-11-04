import React from 'react';
import { Text, TextStyle, View, ViewStyle } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

interface GradientTextProps {
  text: string;
  fontSize?: number;
  fontFamily?: string;
  gradientColors: string[];
  style?: ViewStyle | TextStyle; // Accept both View and Text styles
}

const GradientText: React.FC<GradientTextProps> = ({
  text,
  fontSize = 15,
  fontFamily,
  gradientColors,
  style,
}) => {
  return (
    <MaskedView
      style={{ width: '100%', height: fontSize }} // Adjust width and height as needed
      maskElement={
        <Text
          style={{
            fontSize,
            fontFamily,
            color: 'transparent', // Hide the text color
            textAlign: 'center', // Center the text if desired
          }}
        >
          {text}
        </Text>
      }
    >
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{ flex: 1 }} // Fill the MaskedView
      />
    </MaskedView>
  );
};

export default GradientText;
