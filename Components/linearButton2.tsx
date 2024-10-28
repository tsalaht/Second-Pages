import { LinearGradient } from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { ReactNode } from 'react';
import Colors from '../Colors';
interface BasicProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
  linearStyle?: ViewStyle;
  textStyles?: TextStyle;
  disabled?: boolean;
  insetShadowContainerStyle?: ViewStyle;
}
interface ChildrenProps extends BasicProps {
  children: ReactNode;
}
interface TextProps extends BasicProps {
  text: string;
}
export default function LinearButton2(props: TextProps | ChildrenProps) {
  return (
    <TouchableOpacity
      disabled={props.disabled}
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
    >
      <LinearGradient
        style={[styles.linear, props.linearStyle]}
        colors={['#FFFCA8',Colors.PRIMARY_600, '#FFAF36','#F1DC83']}
        start={[0, 0]}
        end={[1, 1]}
      >
        {'children' in props ? (
          props.children
        ) : (
          <Text style={[styles.text, props.textStyles]}>{props.text}</Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  linear: {
    width: '100%',
    borderRadius: 6,
    paddingVertical: 10,
    marginBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.DEFAULT_WHITE,
    fontFamily: 'Almarai_Bold',
    fontSize: 12,
    textAlign: 'center',
  },
  container: {
    elevation: 10,
    shadowColor: Colors.PRIMARY_600,
    shadowOffset: { width: 4, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 20.4,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
