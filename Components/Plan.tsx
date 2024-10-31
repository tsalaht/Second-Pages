import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from "../Views/Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import Matches from "./Matches";
import { useDispatch } from "react-redux";
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withTiming } from 'react-native-reanimated';

export default function Plan() {
  const dispatch = useDispatch();
  const [type, setType] = useState("النهائي");

  // Shared values for scale and translations
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  // Define pinch gesture
  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = event.scale;
    });

  // Define pan gesture for horizontal and vertical movement
  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
      translateY.value = event.translationY;
    })
    .onEnd((event) => {
      if (event) {
        // Use withDecay for smooth movement when the gesture ends
        translateX.value = withDecay({ velocity: event.velocityX });
        translateY.value = withDecay({ velocity: event.velocityY });
      }
    });

  // Combine pinch and pan gestures
  const combinedGesture = Gesture.Simultaneous(pinchGesture, panGesture);

  // Animated style for zoom and pan effect
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateX: translateX.value },
      { translateY: translateY.value },
    ],
  }));

  // Reset zoom and position smoothly when a tab is selected
  const handleTabPress = (selectedType:any) => {
    setType(selectedType);
    scale.value = withTiming(1, { duration: 500 });       // Reset scale to 1 over 0.5s
    translateX.value = withTiming(0, { duration: 500 });  // Reset X translation to 0 over 0.5s
    translateY.value = withTiming(0, { duration: 500 });  // Reset Y translation to 0 over 0.5s
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ ...styles.viewContainer, zIndex: 200000000 }}>
        <View style={{ paddingHorizontal: 10, width: '100%' }}>
          <View style={styl.tabContainer}>
            <Pressable onPress={() => handleTabPress("ربع النهائي")}>
              <View style={[styl.tab, type === "ربع النهائي" && styl.selectedTab]}>
                <Text style={[styl.tabText, type === "ربع النهائي" && styl.selectedTabText]}>
                  ربع النهائي
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handleTabPress("نصف النهائي")}>
              <View style={[styl.tab, type === "نصف النهائي" && styl.selectedTab]}>
                <Text style={[styl.tabText, type === "نصف النهائي" && styl.selectedTabText]}>
                  نصف النهائي
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => handleTabPress("النهائي")}>
              <View style={[styl.tab, type === "النهائي" && styl.selectedTab]}>
                <Text style={[styl.tabText, type === "النهائي" && styl.selectedTabText]}>
                  النهائي
                </Text>
              </View>
            </Pressable>
          </View>

          {/* Apply zoom and pan effect only to matchesContainer */}
          <GestureDetector gesture={combinedGesture}>
            <Animated.View style={[styl.matchesContainer, animatedStyle]}>
              <View style={{flexDirection:'row',gap:40,alignItems:'center'}}>
                <View style={{position:'absolute',flexDirection:'row',left:85,top:40}}>
<View style={{flexDirection:'column',gap:80}}>
<View style={{ width:15,height:2,backgroundColor:'#5A5B5A'}}></View>
<View style={{ width:15,height:2,backgroundColor:'#5A5B5A'}}></View>
</View>
<View style={{ width:2,height:85,backgroundColor:'#5A5B5A'}}></View>
<View style={{ width:30,height:2,backgroundColor:'#5A5B5A',top:45}}></View>
                </View>
              <View style={{flexDirection:'column',gap:18.93}}>
              <View style={{flexDirection:'column',gap:9.47}}>
              <Matches scenario={1} />
              <Matches scenario={1} />
              </View>
              <View style={{position:'absolute',flexDirection:'row',left:85,top:220}}>
<View style={{flexDirection:'column',gap:80}}>
<View style={{ width:15,height:2,backgroundColor:'#5A5B5A'}}></View>
<View style={{ width:15,height:2,backgroundColor:'#5A5B5A'}}></View>
</View>
<View style={{ width:2,height:85,backgroundColor:'#5A5B5A'}}></View>
<View style={{ width:30,height:2,backgroundColor:'#5A5B5A',top:40}}></View>
                </View>
              <View style={{flexDirection:'column',gap:9.47}}>
              <Matches scenario={1} />
              <Matches scenario={1} />
              </View>
              </View>
              <View style={{flexDirection:'column',gap:86.37}}>
              <Matches scenario={1} />
              <Matches scenario={2} />
              </View>
              <Matches scenario={3} />
              <View style={{position:'absolute',flexDirection:'row',left:220,top:90}}>
<View style={{flexDirection:'column',gap:160}}>
<View style={{ width:15,height:2,backgroundColor:'#5A5B5A'}}></View>
<View style={{ width:15,height:2,backgroundColor:'#5A5B5A'}}></View>
</View>
<View style={{ width:2,height:164,backgroundColor:'#5A5B5A'}}></View>
<View style={{ width:25,height:2,backgroundColor:'#5A5B5A',top:80}}></View>
                </View>
              </View>
          
           
            </Animated.View>
          </GestureDetector>
        </View>
      </View>
    </GestureHandlerRootView>
  );
}

const styl = StyleSheet.create({
  tabContainer: {
    width: "100%",
    backgroundColor: Colors.BACKGROUND_5,
    padding: 8,
    zIndex: 8,
    marginTop: 8,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  matchesContainer: {
    width: "100%",
    // alignItems: "center",
    justifyContent: "center",
    height:'90%',
    position:'relative'
  },
  tab: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 104,
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedTab: {
    backgroundColor: Colors.PRIMARY_600,
  },
  tabText: {
    color: "white",
    fontFamily: "Almarai_Regular",
  },
  selectedTabText: {
    color: Colors.DEFAULT_WHITE,
  },
});
