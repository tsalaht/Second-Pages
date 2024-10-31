import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable } from "react-native";
import styles from "../Views/Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import Matches from "./Matches";
import { useDispatch } from "react-redux";
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withDecay } from 'react-native-reanimated';

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

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ ...styles.viewContainer, zIndex: 200000000 }}>
        <View style={{ paddingHorizontal: 10, width: '100%' }}>
          <View style={styl.tabContainer}>
            <Pressable onPress={() => setType("ربع النهائي")}>
              <View style={[styl.tab, type === "ربع النهائي" && styl.selectedTab]}>
                <Text style={[styl.tabText, type === "ربع النهائي" && styl.selectedTabText]}>
                  ربع النهائي
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("نصف النهائي")}>
              <View style={[styl.tab, type === "نصف النهائي" && styl.selectedTab]}>
                <Text style={[styl.tabText, type === "نصف النهائي" && styl.selectedTabText]}>
                  نصف النهائي
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("النهائي")}>
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
              <Matches scenario={1} />
              <Matches scenario={1} />
              <Matches scenario={1} />
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
    alignItems: "center",
    justifyContent: "center",
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
