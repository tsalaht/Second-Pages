import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Pressable,
  Dimensions,
} from "react-native";
import styles from "./Styles/Index";
import Colors from "../Colors";
import fonts from "../fonts";
import React, { useState } from "react";
import { BlurView } from "expo-blur";
import eagl from "../assets/Ellipse 1.png";
import {
  Profile2User,
  ArrowRight2,
  ShoppingCart,
  Home2,
  Cup,
  Message2,
  Key,
} from "iconsax-react-native";
import { SvgXml } from "react-native-svg";
import Users from "../Components/Users";
import { svgs } from "./svg";
import Champions from "../Components/Champions";
import Leaderboard from "../Components/Leaderboard";
import { setActiveComponent } from "../Store/navigationSlice";
import { useDispatch } from 'react-redux';

export default function Community() {
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const [type, setType] = useState("دوريات عامة");
  const [selectedMonth, setSelectedMonth] = useState("الشهر الحالي");
  const [selectedWeek, setSelectedWeek] = useState<any>("الاسبوع الماضي");
  const renderContent = () => {
    switch (type) {
      case "دوريات عامة":
        return <Users />;
      case "دوريات قيد":
        return <Champions />;
      case "دوريات خاصة":
        return <Leaderboard />;
      default:
        return null;
    }
  };
  const renderContent2 = () => {
    switch (type) {
      case "دوريات عامة":
        return (
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              gap: 8,
              flexDirection: "row",
            }}
          >
            <View style={styl.container1}>
              <Text
                style={{
                  color: "#9C9FA6",
                  fontFamily: fonts.almaraiRegular,
                  fontSize: 12,
                }}
              >
                لاعب متواجد هنا
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 2 }}
              >
                <Text
                  style={{
                    color: Colors.DEFAULT_WHITE,
                    fontFamily: fonts.almaraiBold,
                    fontSize: 15,
                  }}
                >
                  1500
                </Text>
                <View
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 50,
                    backgroundColor: Colors.SUCCESS_600,
                  }}
                ></View>
              </View>
            </View>
            <View style={styl.container2}>
              <Text
                style={{
                  color: "white",
                  fontFamily: fonts.almaraiRegular,
                  fontSize: 14,
                }}
              >
                الخادم 1
              </Text>
            </View>
          </View>
        );
      case "دوريات قيد":
        return (
          <View style={{ paddingHorizontal: 12, width: "100%" }}>
            <View
              style={{
                width: "100%",
                backgroundColor: Colors.BACKGROUND_5,
                padding: 8,
                zIndex: 8,
                marginTop: 8,
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Pressable onPress={() => setSelectedMonth("الشهر الحالي")}>
                <View
                  style={[
                    styl.tab2,
                    selectedMonth === "الشهر الحالي" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedMonth === "الشهر الحالي" && styl.selectedTabText,
                    ]}
                  >
                    الشهر الحالي
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => setSelectedMonth("الشهر الماضي")}>
                <View
                  style={[
                    styl.tab2,
                    selectedMonth === "الشهر الماضي" && styl.selectedTab,
                  ]}
                >
                  <Text
                    style={[
                      styl.tabText,
                      selectedMonth === "الشهر الماضي" && styl.selectedTabText,
                    ]}
                  >
                    الشهر الماضي
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      case "دوريات خاصة":
        return (
          <View style={{ width: "100%", paddingHorizontal: 16 }}>
            <View
              style={{
                width: "100%",
                backgroundColor: Colors.BACKGROUND_5,
                padding: 8,
                zIndex: 8,
                marginTop: 8,
                borderRadius: 16,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
      
              <Pressable style={{width:'100%', alignItems: "center",
                justifyContent: "center",}} >
                <View
               style={{width:'100%',backgroundColor:Colors.PRIMARY_600,alignItems: "center",
                justifyContent: "center",}}
                >
                  <Text
                  >
                    الاسبوع الماضي
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        );
      default:
        return null;
    }
  };
  const shadow = StyleSheet.create({
    // inside shadow
    container: {
      padding: 16,
      backgroundColor: Colors.NEUTRALS,
      borderRadius: 8,
      shadowColor: "#0000004D",
      marginLeft: 45,
      shadowOffset: {
        width: 4,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 6.8,
      elevation: 10,
    },
    text: {
      color: Colors.PRIMARY_600,
      fontFamily: fonts.almaraiRegular,
    },
    blurContainer: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderBottomEndRadius: 24,
      borderBottomStartRadius: 24,
    },
    blurContainer2: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: Colors.BACKGROUND_3,
      alignItems: "center",
      justifyContent: "center",
      borderTopEndRadius: 24,
      borderTopStartRadius: 24,
    },
  });

  return (
    <View style={styles.viewContainer}>
      <ImageBackground
        style={styles.background}
        source={require("../assets/plagin.png")}
        resizeMode="cover"
        imageStyle={{
          opacity: 0.1,
        }}
      >
        <BlurView intensity={5} tint="dark" style={shadow.blurContainer}>
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              paddingVertical: 20,
              alignItems: "center",
              justifyContent: "space-between",
              paddingHorizontal: 32,
            }}
          >
            <View></View>
            <View style={shadow.container}>
              <Text style={shadow.text}>الدوريات</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                backgroundColor: Colors.BACKGROUND_5,
                borderRadius: 16,
                alignItems: "center",
                padding: 12,
                gap: 4,
              }}
            >
              <Text style={{ color: Colors.BACKGROUND_3, fontFamily: "Almarai_Regular" }}>
                عودة
              </Text>
              <ArrowRight2 size={16} color={Colors.BACKGROUND_3} />
            </View>
          </View>
        </BlurView>

        <View
          style={{
            paddingHorizontal: width * 0.04,
            // marginTop: 2,
            flex: 1,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "100%",
              backgroundColor: Colors.BACKGROUND_5,
              padding: 8,
              zIndex: 8,
              marginTop: 8,
              borderRadius: 16,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Pressable onPress={() => setType("دوريات خاصة")}>
              <View
                style={[styl.tab, type === "دوريات خاصة" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "دوريات خاصة" && styl.selectedTabText,
                  ]}
                >
                  دوريات خاصة
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("دوريات قيد")}>
              <View style={[styl.tab, type === "دوريات قيد" && styl.selectedTab]}>
                <Text
                  style={[
                    styl.tabText,
                    type === "دوريات قيد" && styl.selectedTabText,
                  ]}
                >
                  دوريات قيد
                </Text>
              </View>
            </Pressable>
            <Pressable onPress={() => setType("دوريات عامة")}>
              <View
                style={[styl.tab, type === "دوريات عامة" && styl.selectedTab]}
              >
                <Text
                  style={[
                    styl.tabText,
                    type === "دوريات عامة" && styl.selectedTabText,
                  ]}
                >
                  دوريات عامة
                </Text>
              </View>
            </Pressable>
          </View>

          {renderContent()}
        </View>
        <BlurView
          intensity={5}
          tint="dark"
          style={{ ...shadow.blurContainer2 }}
        >
          <View style={{ width: "100%", paddingVertical: 12 }}>
            {renderContent2()}

            <View
              style={{
                width: "100%",
                justifyContent: "center",
                alignItems: "center",
                gap: 28,
                flexDirection: "row",
                marginTop: 16,
              }}
            >
              <Pressable  onPress={() => dispatch(setActiveComponent('Distribution'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <ShoppingCart size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    المتجر
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('Community'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Profile2User size="16" color="#EFB054" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}>
                    المجتمع
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('MyProfil'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Home2 size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    الرئيسية
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('HonorablePeople'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Cup size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                    }}
                  >
                    دوريات قيد
                  </Text>
                </View>
              </Pressable>
              <Pressable onPress={() => dispatch(setActiveComponent('Chat'))}>
                <View style={{ flexDirection: "column", alignItems: "center" }}>
                  <View style={styl.iconsContainer}>
                    <Message2 size="16" color="#262B33" />
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: fonts.almaraiRegular,
                      fontSize: 12,
                  
                    }}
                  >
                    الدردشة
                  </Text>
                </View>
              </Pressable>
            </View>
          </View>
        </BlurView>
      </ImageBackground>
    </View>
  );
}

const styl = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  background: {
    flex: 1,
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
    color:Colors.DEFAULT_WHITE,
  },
  bottmRaduse: {
    borderTopEndRadius: 24,
    borderTopStartRadius: 24,
  },
  container1: {
    borderRadius: 28,
    paddingHorizontal: 48.5,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.BACKGROUND_4,
    flexDirection: "row",
  },
  container2: {
    borderRadius: 28,
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BACKGROUND_5,
  },
  iconsContainer: {
    padding: 12,
    backgroundColor: Colors.BACKGROUND_5,
    borderRadius: 16,
  },
  tab2: {
    borderWidth: 1,
    borderColor: "transparent",
    paddingVertical: 8,
    width: 159.5,
    backgroundColor: Colors.BACKGROUND_4,
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
});
